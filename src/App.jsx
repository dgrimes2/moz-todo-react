import Todo from "./Components/Todo";
import Form from "./Components/Form";

function App(props) {
  console.log(props.tasks);

  const taskList = props.tasks?.map((task) => (
    <Todo 
    id ={task.id} 
    name = {task.name} 
    completed = {task.completed} 
    key = {task.id}
    reminder = "" />));

  return (
    <div className="todoapp stack-large">
      <h1 hidden = {false}>ProcrastiNOT ToDo App</h1>
      <Form />
      <h2 id="list-heading"> 3 tasks remaining</h2>
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
