import React, { useEffect } from "react";
import "./Todo.css";
import ListTask from "./ListTask";
import AddTask from "./AddTask";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Todo() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    document.title = `You have ${tasks.length} pending tasks(s)`;
  });

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  return (
    <>
      <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TODO APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tasks">Tasks</Nav.Link>
            <Nav.Link href="#reminder">Remainder</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      </div>

      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <ListTask
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
