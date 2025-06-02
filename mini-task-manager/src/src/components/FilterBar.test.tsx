import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from './FilterBar';

it('updates the from date when changed', () => {
  const setFilter = jest.fn();

  render(
    <FilterBar filter={{ from: '', to: '' }} setFilter={setFilter} />
  );

  const inputs = screen.getAllByDisplayValue(''); // both inputs start empty
  fireEvent.change(inputs[0], {
    target: { value: '2024-01-01' },
  });

  expect(setFilter).toHaveBeenCalledWith({ from: '2024-01-01', to: '' });
});
