import { Task } from '../types/Task';

const API_URL = 'http://localhost:3001/tasks';

export const getTasks = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export const addTask = async (task: Omit<Task, 'id'>) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return await res.json();
};

export const deleteTask = async (id: number) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};

export const updateTask = async (id: number, data: Partial<Task>) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("PATCH failed:", response.status, errorText);
    throw new Error(`Update failed: ${response.status}`);
  }

  return await response.json();
};



