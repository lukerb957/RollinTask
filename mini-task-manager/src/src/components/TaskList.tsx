import React from "react";
import { Task } from "../types/Task";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

const TaskList = ({ tasks, onDelete, onComplete }: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.complete ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button onClick={() => onComplete(task.id)}>Complete</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
