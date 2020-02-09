import React from 'react';
import { render, wait, RenderResult } from '@testing-library/react';
import List, { ListParams } from './List';
import listQuery from './List.gql';
import { GROCERIES_LIST } from './List.fixture';
import { useParams } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';

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
  });
});
