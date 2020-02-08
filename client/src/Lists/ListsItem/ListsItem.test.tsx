import React from 'react';
import { render } from '@testing-library/react';
import { SHOPPING_LIST } from './ListsItem.fixture';
import ListsItem from './ListsItem';
import { advanceTo, clear } from 'jest-date-mock';

// Mock icon so we don't pollute snapshot with its SVG implementation details
jest.mock('@material-ui/icons/Schedule', () => () => (
  <i data-testid="ScheduleIcon" />
));

describe('ListItem', () => {
  beforeAll(() => {
    advanceTo('2020-02-14T18:28:34.231Z');
  });

  afterAll(() => {
    clear();
  });

  it('should render', () => {
    const { container } = render(<ListsItem list={SHOPPING_LIST} />);
    expect(container).toMatchSnapshot();
  });
});
