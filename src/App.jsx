import Todo from "./Components/Todo";
import Form from "./Components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";


function App(props) {
  console.log(props.tasks);
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    // console.log(tasks[0]);
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  
  
  
  const taskList = tasks?.map((task) => (
    <Todo 
    id ={task.id} 
    name = {task.name} 
    completed = {task.completed} 
    key = {task.id}
    toggleTaskCompleted = {toggleTaskCompleted}
    deleteTask = {deleteTask}
    reminder = "" />));
  
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false, reminder: "" };
      // name is just a string, so put it into an object to keep formatting of other tasks
      // then throw the newTask object into an array to update state
    setTasks([...tasks, newTask]);
  }
    // task count
  const headingText = `${taskList.length} tasks remaining`;


  return (
    <div className="todoapp stack-large">
      <h1 hidden = {false}>ProcrastiNOT ToDo App</h1>
      <Form addTask = {addTask} />
      <h2 id="list-heading"> {headingText} </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
