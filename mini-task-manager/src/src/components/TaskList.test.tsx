import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';
import { Task } from '../types/Task';

describe('TaskList', () => {
  const mockTasks: Task[] = [
    { id: 1, title: 'Write tests', description: "Testing", complete: false, created: '2023-01-01T00:00:00Z' }
  ];

  it('calls onComplete when Complete button is clicked', () => {
    const onComplete = jest.fn();
    const onDelete = jest.fn();

    render(
      <TaskList
        tasks={mockTasks}
        onDelete={onDelete}
        onComplete={onComplete}
      />
    );

    const completeButton = screen.getByText('Complete');
    fireEvent.click(completeButton);

    expect(onComplete).toHaveBeenCalledWith(1);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });
});
