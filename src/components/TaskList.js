import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteItem }) {
  const lookTasks = tasks.map((task) => (
    <Task
      key={task.text}
      deleteItem={deleteItem}
      category={task.category}
      text={task.text}
    />
  ));
  return <div className="tasks">{lookTasks}</div>;
}

export default TaskList;
