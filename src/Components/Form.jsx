import React from "react";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
// import { useContext } from "react";
// import { Context } from "react";


function Form(props) {
    // Empty "" ensures that the resting input in the box is blank
    const [name, setName] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState("");
    // const [selectedDate, setSelectedDate] = useState("");

    console.log(selectedDate);
    console.log(typeof(selectedDate));
    console.log(reminder);
    console.log(typeof(reminder));
    // console.log(date);


    //Listener: Allows you to see what you're typing
    function handleChange(e) {
        setName(e.target.value);
        setDate(e.target.selectedDate);
        console.log(name);
        console.log(date);
        // console.log(addTask(name));
        // console.log(reminder);
        // console.log(props.reminder);
        // console.log(reminder);
    }
    
    function handleReminderChange(e) {
        setReminder(e.target.selectedDate);
        // onChange =selectedDate => setReminder(selectedDate)
    }
    
    //Listener: Popup alert once you click to add task
    function handleSubmit(e) {
        e.preventDefault();
        // send the task back to App.jsx to collect
        props.addTask(name, reminder);
        // clear the input after
        setName("");
        setReminder("");
        // setSelectedDate("");
    }

    function resetAdd(e) {
      setSelectedDate("");
    }
    console.log(selectedDate);
    console.log(typeof(selectedDate));
    console.log(reminder);
    console.log(typeof(reminder));

    return(
      <form onSubmit = {handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
              .....................
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value = {name}
          onChange = {handleChange}
          // reminder={props.selectedDate}
        />
             
        <div>
          <DatePicker            
            showTimeInput = {true}
            // once date/time are selected update setDate
            
            selected={selectedDate}
            // datetime = {props.datetime}
            // onClick = {props.onClick}
            // onChange={handleReminderChange}
            onChange={(reminder) => setSelectedDate(reminder)}
            placeholderText="Select Due Date"
            // onChange={handleReminderChange}
            dateFormat="MMMM d, yyyy hh:mmaa"
            shouldCloseOnSelect = {true}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn__primary btn__lg"
          onClick={resetAdd}>
          Add Task
        </button>
      </form>
    );
};


export default Form;