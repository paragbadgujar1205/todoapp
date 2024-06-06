// Action Types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

// Action Creators
export const addTask = task => ({
    type: ADD_TASK,
    task
});

export const deleteTask = index => ({
    type: DELETE_TASK,
    index
});

export const updateTask = (index, newTask) => ({
    type: UPDATE_TASK,
    index,
    newTask
});

export const toggleTask = index => ({
    type: TOGGLE_TASK,
    index
});
