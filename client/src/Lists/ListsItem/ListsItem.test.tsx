import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SHOPPING_LIST } from './ListsItem.fixture';
import ListsItem from './ListsItem';
import { advanceTo, clear } from 'jest-date-mock';
import { useHistory } from 'react-router-dom';

// Mock icon so we don't pollute snapshot with its SVG implementation details
jest.mock('@material-ui/icons/Schedule', () => () => (
  <i data-testid="ScheduleIcon" />
));

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn().mockReturnValue({
    push: jest.fn()
  })
}));

describe('ListItem', () => {
  beforeAll(() => {
    advanceTo('2020-02-14T18:28:34.231Z');
  });

  afterAll(() => {
    clear();
  });

  it('should render', () => {
    const { container } = render(<ListsItem list={SHOPPING_LIST} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should navigate to a specific todo list', () => {
    const { container } = render(<ListsItem list={SHOPPING_LIST} />);

    const { push } = useHistory();

    if (!container.firstElementChild) {
      throw new Error(`Can't find firstElementChild`);
    }

    fireEvent.click(container.firstElementChild);

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(`/lists/${SHOPPING_LIST.id}`);
  });
});
