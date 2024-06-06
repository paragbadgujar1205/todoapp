import { createStore } from 'redux';
import tasksReducer from './Reducer';

// Create Redux Store
const store = createStore(tasksReducer);

export default store;
