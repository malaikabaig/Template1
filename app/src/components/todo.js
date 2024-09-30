import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editId, setEditId] = useState('');
  const [currentTodo, setCurrentTodo] = useState('');

  //get all data once loading
  useEffect(() => {
    const getall = async () => {
      let { data } = await axios.get('http://localhost:7080/api/all');
      console.log('data', data);
      if (data) {
        setTodos(data);
      }
    };
    getall();
  }, []);

  //hanndler to add todo
  const add = async () => {
    try {
      console.log(currentTodo);
      let newtodo = await axios.post('http://localhost:7080/api/add', {
        type: currentTodo,
      });
      if (newtodo.data) {
        console.log(newtodo.data.data);
        setTodos([...todos, newtodo.data.data]);
      }
    } catch (error) {
      alert('Todo NOT added');
    }
  };

  //handler for deleting todo

  const handleDeleteTodo = async (id) => {
    try {
      const todo = await axios.delete(`http://localhost:7080/api/${id}`);
      if (todo.data) {
        const updatedTodo = todos.filter((todo) => todo._id !== id);
        setTodos(updatedTodo);
      }
    } catch (error) {
      alert('Error while deleting');
    }
  };

  //handler for editing todo
  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditId(todos[index]._id);
    setCurrentTodo(todos[index].type);
  };

  //handler for editing todo
  const update = async () => {
    try {
      if (editId) {
        const todo = await axios.put(`http://localhost:7080/api/${editId}`, {
          type: currentTodo,
        });

        console.log('todo.data', todo.data);
        if (todo.data) {
          const updatedTodos = todos.map((todo) =>
            todo._id === editId ? { ...todo, type: currentTodo } : todo
          );

          setTodos(updatedTodos);
          setEditId('');
          setCurrentTodo('');
          setEditIndex(null);
        }
      }
    } catch (error) {
      alert('Error while updating Todo');
    }
  };

  return (
    <Box sx={{ backgroundColor: 'teal', height: '100vh' }}>
      <Box sx={{ mx: { xs: 20, sm: 25, md: 30, lg: 50 }, py: 10 }}>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: 30, sm: 35, md: 40, lg: 50 },
          }}
        >
          Todo List
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: 25, sm: 30, md: 35, lg: 38 },
          }}
        >
          A simple react todo list app
        </Typography>
        <Divider sx={{ width: '100%', backgroundColor: 'white', height: 10 }} />

        {/* Display the list of todos */}
        <Box sx={{ mt: 4, color: 'white' }}>
          {todos.length > 0 && (
            <Typography variant="h6">Your Todos:</Typography>
          )}
          {todos.map((todo, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', pt: 1 }}
            >
              <Typography sx={{ flexGrow: 1 }}>
                {index + 1}.{todo.type}
              </Typography>
              <EditIcon
                onClick={() => handleEditTodo(index)}
                sx={{ cursor: 'pointer', color: 'white', ml: 1 }}
              />
              <DeleteIcon
                onClick={() => handleDeleteTodo(todo._id)}
                sx={{ cursor: 'pointer', color: 'white', ml: 1 }}
              />
            </Box>
          ))}
        </Box>

        <Typography sx={{ fontSize: 35, color: 'white', pt: 10 }}>
          Add New Todo
        </Typography>
        <TextField
          id="outlined-multiline-flexible"
          variant="standard"
          placeholder="New Todo"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
          sx={{
            width: '300px',
            '& .MuiInputBase-input': { height: '40px', color: 'white' },
            borderBottom: '1px solid #727272',
            '& .MuiInputBase-root': {
              borderBottom: '1px solid #727272',
            },
            '& .MuiInputBase-root:before': {
              borderBottom: '1px solid #727272',
            },
            '& .MuiInputBase-root:after': {
              borderBottom: '2px solid white',
            },
            '& .MuiInputLabel-root': {
              color: '#727272',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
          }}
        />
        <Button
          variant="standard"
          onClick={editIndex !== null ? update : add}
          sx={{
            color: 'white',
            outlineColor: 'white',
            border: 1,
            ml: 2,
            fontSize: 25,
          }}
        >
          {editIndex !== null ? 'Update Todo' : 'Add Todo'}
        </Button>
      </Box>
    </Box>
  );
}
