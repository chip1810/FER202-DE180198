import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="my-4">
      <Form.Control
        type="text"
        placeholder="Add new todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="success" className="mt-2" onClick={addTask}>
        Add
      </Button>
      <ListGroup className="mt-3">
        {todos.map((item, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {item}
            <Button variant="danger" size="sm" onClick={() => removeTask(index)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
export default TodoList;
