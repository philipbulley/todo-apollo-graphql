import React from 'react';
import { render, wait, RenderResult } from '@testing-library/react';
import List from './List';
import listQuery from './List.gql';
import { GROCERIES_LIST } from './List.fixture';
import { useParams } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn()
}));
const useParamsMock = useParams as jest.Mock;

describe('List', () => {
  beforeEach(() => {
    useParamsMock.mockReturnValue({ listId: 1 });
  });

  describe('rendering', () => {
    let utils: RenderResult;

    beforeEach(async () => {
      const mocks = [
        {
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
        }
      ];

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
      expect(getAllByRole('checkbox').map(el => el.textContent).length).toBe(5);
    });

    it('each item should have a checkbox', async () => {
      const { getByText } = utils;
      expect(getByText(/^You have.*/).textContent).toBe('You have 5 items');
    });
  });
});
