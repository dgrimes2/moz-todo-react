import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "todo-0", name: "ProcrastiNOT 1", completed: true, reminder: "" },
  { id: "todo-1", name: "ProcrastiNOT 2", completed: false },
  { id: "todo-2", name: "ProcrastiNOT 3", completed: false },
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Pass in DATA array into App.jsx as a prop */}
    <App tasks = {DATA} />
    {/* // subject = "Derayvia"
    // dueDate = "reminder"/> */}
  </React.StrictMode>,
)
