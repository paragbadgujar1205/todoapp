import { ADD_TASK, DELETE_TASK, UPDATE_TASK, TOGGLE_TASK } from "./Action";

// Initial State
const initialState = {
  tasks: [],
};

// Reducer
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { text: action.task, completed:false }],    
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.index),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index ? { ...task, text: action.newTask } : task),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.index
            ? { ...task, completed: !task.completed }: task),
      };
    default:
      return state;
  }
};

export default tasksReducer;
