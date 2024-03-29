import React, { useEffect } from "react";
import { useState, useRef } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Countdown from "react-countdown";
import CountdownTimer from "./CountdownTimer";
import '../App.css';

// import {DatePicker} from 'rsuite'
// import { useContext } from "react";
// import { Context } from "react";


function Form(props) {
    // Empty "" ensures that the resting input in the box is blank
    const [name, setName] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState();
   
    

    console.log(selectedDate);
    console.log(typeof(selectedDate));
    console.log(selectedDate.toLocaleString());
    console.log(typeof(selectedDate.toLocaleString()));
    console.log(reminder);
    console.log(typeof(reminder));
    // console.log(date);



    //Listener: Allows you to see what you're typing
    function handleChange(e) {
        setName(e.target.value);
        setReminder(e.target.selected);
        console.log(name);
        console.log(reminder);
        console.log(e.target.selected)
        // console.log(addTask(name));
        // console.log(reminder);
        // console.log(props.reminder);
        // console.log(reminder);
    }
    
    // function handleReminderChange(e) {
    //     setReminder(e.target.selected);
    //     selectedDate => setReminder(selectedDate)
    //     console.log(reminder)
    //     // props.addTask(reminder);
    // }
    
    console.log(selectedDate);
    console.log(new Date());
    let rightNow = new Date();
    let compDate = selectedDate;
    let checkReminder = compDate - rightNow;
    // console.log(props.reminder - new Date())
    console.log(checkReminder);
    // converted to seconds
    console.log(checkReminder/1000);

    
    
    
    function reminderAlert() {
      if (checkReminder <= 0) {
        alert("Your due date has passed!!!");
      }
    }

    //Listener: Popup alert once you click to add task
    function handleSubmit(e) {
        e.preventDefault();
        // send the task back to App.jsx to collect
        setReminder(selectedDate);
        console.log(selectedDate);
        console.log(typeof(selectedDate))
        console.log(reminder)
        // where I can use for the duedate modal
        console.log(reminder.toLocaleString())
        props.addTask(name, reminder);
        console.log(props);
        // clear the input after
        setName("");
        setReminder("");
        // setSelectedDate("");
    }

    function resetAdd(e) {
        // console.log(selectedDate)
        // setSelectedDate("");
        // console.log(selectedDate)

    }
    console.log(selectedDate);
    console.log(typeof(selectedDate));
    console.log(reminder);
    console.log(typeof(reminder));

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

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
          
        />
         
        <div>
          <DatePicker            
            showTimeInput = {true}
            // showTimeSelect
            // once date/time are selected update setDate
            placeholderText="Select Due Date"
            selected={selectedDate}
            todayButton = "Today"
            // onSelect={handleDateSelect}
            // datetime = {props.datetime}
            // onClick = {props.onClick}
            // onChange={handleReminderChange}
            onChange={(reminder)=>setSelectedDate(reminder)}
            // onChange={handleReminderChange}
            dateFormat="MMMM d, yyyy hh:mmaa"
            editable = {false}
            shouldCloseOnSelect = {true}
            // strictParsing
          />
        </div>
        <button 
          type="submit" 
          className="btn btn__primary btn__lg"
          // onClick = {function remAlert() {
          //   if (checkReminder <= 0) {
          //     alert("Your due date has passed!!!");
          //   }
          // }}
          >
          Add Task
        </button>

        <div>
      {/* <h1>Placeholder</h1> */}
      <CountdownTimer targetDate={NOW_IN_MS + checkReminder} />
      {/* <CountdownTimer targetDate={NOW_IN_MS+100000000} /> */}

      
    </div>
    
      </form>
      

    );
    console.log(targetDate);
};


export default Form;
