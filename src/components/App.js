import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const seeTasks = tasks.filter((task) => category === "All" || task.category);

  function handleDelete(deleted) {
    setTasks(tasks.filter((task) => task.text !== deleted));
  }

  function addTask(newTasks) {
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectCategory={category}
        filterSelectCategory={setCategory}
      />
      <NewTaskForm
        onTaskSubmitForm={addTask}
        categories={CATEGORIES.filter((category) => category !== "All")}
      />
      <TaskList tasks={seeTasks} deleteItem={handleDelete} />
    </div>
  );
}

export default App;
