import React from 'react';
import {
  render,
  wait,
  RenderResult,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import List from './List';
import listQuery, { updateListItem } from './List.gql';
import { GROCERIES_LIST } from './List.fixture';
import { useParams } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn()
}));
const useParamsMock = useParams as jest.Mock;

const GROCERIES_LIST_MOCK_QUERY = {
  request: {
    query: listQuery,
    variables: {
      id: 1
    }
  },
  result: {
    data: {
      ...GROCERIES_LIST
    }
  }
};

describe('List', () => {
  let utils: RenderResult;
  beforeEach(() => {
    useParamsMock.mockReturnValue({ listId: 1 });
  });

  describe('rendering', () => {
    beforeEach(async () => {
      const mocks = [GROCERIES_LIST_MOCK_QUERY];

      await wait(() => {
        utils = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <List />
          </MockedProvider>
        );
      });
    });

    it('should render each item', async () => {
      const { getAllByRole } = utils;
      expect(getAllByRole('listitem').map(el => el.textContent))
        .toMatchInlineSnapshot(`
              Array [
                "Bananas",
                "Apples",
                "Bangers",
                "Mash",
                "Pizza",
              ]
          `);
    });

    it('each item should have a checkbox', async () => {
      const { getAllByRole } = utils;
      const checkboxes = await waitForElement(() => getAllByRole('checkbox'));
      expect(checkboxes.map(el => el.textContent).length).toBe(5);
    });

    it('should display total items', async () => {
      const { getByText } = utils;
      const count = await waitForElement(() => getByText(/^You have.*/));
      expect(count.textContent).toBe('You have 5 items');
    });
  });

  describe('toggling done on items', () => {
    beforeEach(async () => {
      const mocks = [
        GROCERIES_LIST_MOCK_QUERY,
        {
          request: {
            query: updateListItem,
            variables: {
              id: '1',
              fields: {
                done: true
              }
            }
          },
          result: {
            data: {
              updateTodoListItem: {
                ...GROCERIES_LIST.todoList?.items.edges[0].node,
                done: true
              }
            }
          }
        }
      ];
      await wait(() => {
        utils = render(
          <MockedProvider mocks={mocks}>
            <List />
          </MockedProvider>
        );
      });
    });

    it('should mark an item as done when clicking checkbox', async () => {
      const { getAllByRole } = utils;
      const checkboxes = await waitForElement(() => getAllByRole('checkbox'));
      let checkbox = checkboxes[0];
      expect(checkbox).not.toBeChecked();

      fireEvent.click(checkbox);
      await wait();

      expect(checkbox).toBeChecked();
    });
  });
});
