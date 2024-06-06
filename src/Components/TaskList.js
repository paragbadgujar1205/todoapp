import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../Redux/Action";

const TaskList = ({ setEditMode, setTaskToEdit }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleEdit = (index, task) => {
    setTaskToEdit({ index, task: task.text });
    setEditMode(true);
  };



  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index}
          className={`list-group-item d-flex justify-content-between align-items-start list-item my-1 ${task.completed ? "completed" : ""}`}>
          <div className="list-text">
          <span
            style={{textDecoration: task.completed ? "line-through" : "none",cursor: "pointer", }} onClick={() => dispatch(toggleTask(index))} >
            {task.completed? <i class="fa-solid fa-circle-check px-2"></i>: null}
            {task.text}
          </span>
          </div>
          
          <div className="d-flex gap-3 fs-4 editIcon mx-1">
            <div onClick={() => handleEdit(index, task)}>
              <i className="fa-solid fa-pen"></i>
            </div>
            <div onClick={() => dispatch(deleteTask(index))}>
              <i className="fa-solid fa-trash deleteIcon"></i>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
