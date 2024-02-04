import Form from "./Form";

function Todo(props) {
    console.log(props);
    console.log(typeof(props));
    console.log(props.name);
    console.log(typeof(props.name));
    // console.log(name);
    // console.log(typeof(name));
    // console.log(reminder);
    // console.log(typeof(reminder));
    console.log(props.reminder);
    console.log(typeof(props.reminder));
    console.log(props.reminder.toLocaleString());
    console.log(typeof(props.reminder.toLocaleString()));

    
    return(
        <li className="todo stack-small">
          <div className="c-cb">
            <input 
                id={props.id}
                type="checkbox" 
                defaultChecked={props.completed} 
                onChange = {() => props.toggleTaskCompleted(props.id)} />

            <label className="todo-label" htmlFor={props.id}>
              {props.name + " " + props.reminder}
            </label>
          </div>
          <div className="btn-group">
            <button 
              type="button" 
              className="btn btn__danger"
              onClick={() => props.deleteTask(props.id)}>
                Delete 
              <span className="visually-hidden">{props.name}</span>
            </button>
          </div>
        </li>
    )
}

export default Todo;
