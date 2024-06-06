# Simple React To-Do Application

This is a basic To-Do application built using ReactJS. It allows users to add, view, edit, and delete tasks. The application showcases the use of HTML, CSS, JavaScript, React components, hooks, and state management using Redux.

## Project Structure

todoapp/
├── public/
│   ├── index.html
├── src/
│   ├── Components/
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   ├── Redux/
│   │   ├── Action.js
│   │   ├── Reducer.js
│   │   ├── Store.js
    ├── App.css
│   ├── App.js
│   ├── index.js
├── README.md
├── package.json

## Features

- Add tasks: Users can input a task into a text field and add it to the list.
- View tasks: All added tasks are displayed in a list format.
- Edit tasks: Users can edit existing tasks.
- Delete tasks: Users can remove tasks from the list.
- Mark tasks as completed: Users can mark tasks as completed without deleting them.

## Bonus Features

- Mark tasks as completed: Users can toggle the completion status of tasks.
- Persistent storage: Tasks are saved to local storage, ensuring they are not lost on page reload.

## Setup Instructions

To run this application on your local machine, follow these steps:

1. Clone this repository to your local machine using 
`git clone`.

2. Navigate to the project directory. using 
`cd my-todo-app`

3. Install dependencies by running the following command:
`npm install`

4. Start the development server by running the following command:
`npm start`

5. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Add Task: Enter a task in the input field and press Enter or click the "Add" button.
- Edit Task: Click the "Edit" button next to a task to edit it.
- Delete Task: Click the "Delete" button next to a task to remove it from the list.
- Mark Task as Completed: Click on a task to toggle its completion status.


## The project is structured as follows:

- `src/components/`: Contains React components for the TaskInput and TaskList.
- `src/redux/`: Contains Redux action creators and reducers.
- `src/App.js`: Main component containing the application logic.
- `src/index.js`: Entry point of the application.
- `public/index.html`: HTML template for the application.

## Technologies Used

- ReactJS
- Redux
- HTML5
- CSS3

## State Management

State management is handled using Redux. The application state includes a list of tasks and supports actions to add, edit, delete, and toggle the completion status of tasks.

## Credits

This project was created by Parag Badgujar.

