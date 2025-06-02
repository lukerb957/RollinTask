import React, {useState} from "react"

interface AddTaskFormProps {
    onAdd: (title: string) => void;
  }

  function AddTaskForm({ onAdd }: AddTaskFormProps) {
    const [value, setValue] = useState("");
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (!value.trim()) return;
      onAdd(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task to list"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
export default AddTaskForm;
