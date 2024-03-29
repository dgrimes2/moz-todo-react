import React from 'react';
import { useState } from 'react';
import "./App.css";
import Todo from './Components/Todo';
// import FilterButton from './Components/FilterButton';
import Form from './Components/Form';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import CountdownTimer from './Components/CountdownTimer';
import checkReminder from './Components/Form';



function App(props) {
  console.log(props);

  const [tasks, setTasks] = useState(props.tasks);
  // const [reminder, setReminder] = useState("");
  // const [selectedDate, setSelectedDate] = useState(Date());

  // <DatePicker
  //           showTimeInput = {true}
  //           // once date/time are selected update setDate
  //           // selected={selectedDate}
  //           // datetime = {props.datetime}
  //           // onClick = {props.onClick}
  //           onChange={(selectedDate) => setReminder(selectedDate)}
  //           placeholderText="Select Due Date"
  //           // onChange={handleChange}
  //           dateFormat="MMMM d, yyyy hh:mmaa"
  //         />
  function addTask(name, reminder) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false, reminder};
      // name is just a string, so put it into an object to keep formatting of other tasks
      // then throw the newTask object into an array to update state
      console.log(props);
      console.log(reminder);
      console.log(typeof(reminder));
      console.log(props.reminder);
      console.log(typeof(props.reminder));

    setTasks([...tasks, newTask]);

    console.log(props);
    console.log(props.reminder);
    console.log(reminder);
    console.log(props.reminder);
    console.log(tasks);
    console.log(newTask.reminder);

    // return newTask;
  }
  
  function toggleTaskCompleted(id) {

    // console.log(tasks[0]);
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task (for the checkboxes)
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
        // look into using "find" instead of "map" when comparing the id
      }
      return task;
    });
    
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  
  
   
  // map through the list of properties for each task
  const taskList = tasks?.map((task) => (
    <Todo 
      id ={task.id} 
      name = {task.name} 
      // completed = {task.completed} 
      key = {task.id}
      toggleTaskCompleted = {toggleTaskCompleted}
      deleteTask = {deleteTask}
      reminder = {task.reminder}
      timer = {CountdownTimer}
       />));
  
  
    // task count
  const headingText = `${taskList.length} tasks remaining`;
    console.log(taskList);

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const testTimer = checkReminder;
  console.log(THREE_DAYS_IN_MS);
  console.log(NOW_IN_MS);
  console.log(new Date());
  console.log(new Date().getMilliseconds());
  console.log(checkReminder(props));
  console.log(DatePicker.props)


  return (
    <div className="todoapp stack-large">
      <h1 hidden={false}>ProcrastiNOT ToDo App</h1>
      <Form addTask={addTask} />
      <h2 id="list-heading"> {headingText} </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
    // {selectedDate}
  );
}

export default App;
