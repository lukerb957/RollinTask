import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskForm from './AddTaskForm';

it('calls onAdd with input value when form is submitted', () => {
  const onAdd = jest.fn();
  render(<AddTaskForm onAdd={onAdd} />);

  const input = screen.getByPlaceholderText(/add a task/i);
  fireEvent.change(input, { target: { value: 'Test Task' } });

  fireEvent.click(screen.getByText('Add'));
  expect(onAdd).toHaveBeenCalledWith('Test Task');
});
