import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [prog, setProg] = useState([]);
  const [done, setDone] = useState([]);
  const task = React.useRef();
  const [taskString, setTaskString] = useState("");
  const [editedTaskString, setEditedTaskString] = useState("");
  const editedTask = React.useRef();
  const [selectedTask, setSelectedTask] = useState(null);
  const [stage, setStage] = useState("");

  const saveTask = () => {
    if (taskString === "") return;
    setTasks((tasks) => [
      ...tasks,
      {
        id: taskString + tasks.length,
        name: taskString,
        instage: stage,
      },
    ]);
    setTaskString("");
  };

  const editTask = (id) => {
    if (editedTaskString === "") return;
    let tasksRep = tasks.map((task) => {
      let newTask = { ...task };
      if (task.id === id) newTask.name = editedTaskString;
      return newTask;
    });
    setTasks((tasks) => tasksRep);
    setSelectedTask(null);
    setEditedTaskString("");
  };

  const deleteTask = (id) => {
    let tasksRep = tasks.filter((task) => task.id !== id);
    setTasks((tasks) => tasksRep);
  };

  const edit = (id) => {
    setSelectedTask(id);
  };

  const handleTaskChange = (e) => {
    let value = e.target.value;
    setTaskString(value);
  };

  const handleEdit = (e) => {
    let value = e.target.value;
    setEditedTaskString(value);
  };

  const handleStage = (e) => {
    // console.log(e.target.value);
    setStage(e.target.value);
    console.log(stage);
  };

  return (
    <div id="main">
      <textarea
        id="task"
        value={taskString}
        onChange={handleTaskChange}
        ref={task}
        rows="4"
        cols="50"
      ></textarea>
      <label>Select stage:</label>
      <select onChange={handleStage}>
        <option value=""></option>
        <option value="TODO">TODO</option>
        <option value="IN PROGRESS">IN PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>
      <button id="btn" onClick={saveTask}>
        save
      </button>
      <ol>
        {tasks
          .filter((task) => task.instage === "TODO")
          .map((task) => (
            <li key={task.id}>
              <span className="list">{task.name}</span>
              <button className="delete" onClick={() => deleteTask(task.id)}>
                delete
              </button>
              <button className="edit" onClick={() => edit(task.id)}>
                edit
              </button>
              {selectedTask === task.id ? (
                <>
                  <textarea
                    ref={editedTask}
                    value={editedTaskString}
                    onChange={handleEdit}
                    className="editTask"
                    rows="4"
                    cols="50"
                  ></textarea>
                  <button
                    className="saveTask"
                    onClick={() => editTask(task.id)}
                  >
                    save
                  </button>
                </>
              ) : null}
            </li>
          ))}
      </ol>
      <ol>
        {tasks
          .filter((task) => task.instage === "IN PROGRESS")
          .map((task) => (
            <li key={task.id}>
              <span className="list">{task.name}</span>
              <button className="delete" onClick={() => deleteTask(task.id)}>
                delete
              </button>
              <button className="edit" onClick={() => edit(task.id)}>
                edit
              </button>
              {selectedTask === task.id ? (
                <>
                  <textarea
                    ref={editedTask}
                    value={editedTaskString}
                    onChange={handleEdit}
                    className="editTask"
                    rows="4"
                    cols="50"
                  ></textarea>
                  <button
                    className="saveTask"
                    onClick={() => editTask(task.id)}
                  >
                    save
                  </button>
                </>
              ) : null}
            </li>
          ))}
      </ol>
      <ol>
        {tasks
          .filter((task) => task.instage === "DONE")
          .map((task) => (
            <li key={task.id}>
              <span className="list">{task.name}</span>
              <button className="delete" onClick={() => deleteTask(task.id)}>
                delete
              </button>
              <button className="edit" onClick={() => edit(task.id)}>
                edit
              </button>
              {selectedTask === task.id ? (
                <>
                  <textarea
                    ref={editedTask}
                    value={editedTaskString}
                    onChange={handleEdit}
                    className="editTask"
                    rows="4"
                    cols="50"
                  ></textarea>
                  <button
                    className="saveTask"
                    onClick={() => editTask(task.id)}
                  >
                    save
                  </button>
                </>
              ) : null}
            </li>
          ))}
      </ol>
    </div>
  );
}

export default App;
