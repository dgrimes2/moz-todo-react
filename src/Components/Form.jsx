import { useState } from "react";

function Form(props) {
    // Empty "" ensures that the resting input in the box is blank
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        // send the task back to App.jsx to collect
        props.addTask(name);
        // clear the input after
        setName("");
    }
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
          reminder=""
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add Task
        </button>
      </form>
    );
};


export default Form;