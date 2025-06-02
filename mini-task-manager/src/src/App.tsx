import React, { useEffect, useState } from 'react';
import { Task } from './types/Task';
import { getTasks, addTask, deleteTask, updateTask } from './utils/api';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import FilterBar from './components/FilterBar';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState({ from: '', to: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 20;

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data as Task[]);
  };

  const handleAdd = async (title: string) => {
    const newTask = { title, description: "N/A", complete: false, created: new Date().toISOString() };
    await addTask(newTask);
    console.log("Test")
    fetchTasks();
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleComplete = async (id: number) => {
    await updateTask(id, { complete: true });
    console.log("Completing task:", id);
    fetchTasks();
  };

  const filteredTasks = tasks.filter(task => {
    const createdDate = new Date(task.created);
    const fromDate = filter.from ? new Date(filter.from) : null;
    const toDate = filter.to ? new Date(filter.to) : null;

    return (!fromDate || createdDate >= fromDate) &&
           (!toDate || createdDate <= toDate);
  });

  const start = (currentPage - 1) * tasksPerPage;
  const end = start + tasksPerPage;
  const paginatedTasks = filteredTasks.slice(start, end);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTaskForm onAdd={handleAdd} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList tasks={paginatedTasks} onDelete={handleDelete} onComplete={handleComplete} />
    </div>
  );
};

export default App;
