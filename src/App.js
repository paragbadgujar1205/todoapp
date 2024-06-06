import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import "./App.css";
import { addTask } from "./Redux/Action";

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({ index: null, task: "" });
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      savedTasks.forEach((task) => dispatch(addTask(task.text)));
    }
  }, [dispatch]);

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center header">To-Do List</h1>
        <TaskInput editMode={editMode} taskToEdit={taskToEdit} setEditMode={setEditMode}/>
        <TaskList setEditMode={setEditMode} setTaskToEdit={setTaskToEdit} />
      </div>
    </>
  );
};

export default App;
