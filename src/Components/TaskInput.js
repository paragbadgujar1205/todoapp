import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../Redux/Action";

const TaskInput = ({ editMode, taskToEdit, setEditMode }) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      setTask(taskToEdit.task);
    }
  }, [editMode, taskToEdit]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      if (editMode) {
        dispatch(updateTask(taskToEdit.index, task));
        setEditMode(false);
      } else {
        dispatch(addTask(task));
      }
      setTask("");
    }
  };

  return (
    <div className="input-group mb-3 d-flex gap-2 align-items-center">
      <input
        type="text"
        className="form-control new-task py-2"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-success" onClick={handleAddTask}>
          {editMode ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
