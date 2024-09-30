// import { Box, Button, Divider, TextField, Typography } from '@mui/material';
// import { useState, useEffect } from 'react';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import axios from 'axios';
// import mongoose from 'mongoose';

// export default function TodoApp() {
//   const [todos, setTodos] = useState([]); // State to store the list of todos
//   const [currentTodo, setCurrentTodo] = useState(''); // State for the current input
//   const [editIndex, setEditIndex] = useState(null); // State for the todo being edited

//   // Fetch todos from the API on component mount
//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
//       .then((response) => {
//         setTodos(response.data.map((todo) => todo.title)); // Map to titles only for simplicity
//       })
//       .catch((error) => {
//         console.error('Error fetching todos:', error);
//       });
//   }, []);

//   // Handler to add or edit a todo
//   const handleAddEditTodo = () => {
//     if (currentTodo.trim()) {
//       if (editIndex !== null) {
//         // Edit existing todo (for now, updating locally)
//         const updatedTodos = todos.map((todo, index) =>
//           index === editIndex ? currentTodo : todo
//         );
//         setTodos(updatedTodos);
//         setEditIndex(null); // Reset edit index
//       } else {
//         // Add new todo (POST request)
//         axios
//           .post('https://jsonplaceholder.typicode.com/todos', {
//             title: currentTodo,
//             completed: false,
//           })
//           .then((response) => {
//             setTodos([...todos, response.data.title]); // Add new todo to the state
//           })
//           .catch((error) => {
//             console.error('Error adding todo:', error);
//           });
//       }
//       setCurrentTodo(''); // Clear the input
//     }
//   };

//   // Handler to delete a todo
//   const handleDeleteTodo = (index) => {
//     if (window.confirm('Are you sure you want to delete this todo?')) {
//       axios
//         .delete(`https://jsonplaceholder.typicode.com/todos/${index + 1}`)
//         .then(() => {
//           const updatedTodos = todos.filter((_, i) => i !== index);
//           setTodos(updatedTodos);
//         })
//         .catch((error) => {
//           console.error('Error deleting todo:', error);
//         });
//     }
//   };

//   // Handler to set the todo for editing
//   const handleEditTodo = (index) => {
//     setCurrentTodo(todos[index]);
//     setEditIndex(index);
//   };

//   return (
//     <Box sx={{ backgroundColor: 'teal', height: '100vh' }}>
//       <Box sx={{ mx: { xs: 20, sm: 25, md: 30, lg: 50 }, py: 10 }}>
//         <Typography
//           sx={{
//             color: 'white',
//             fontWeight: 'bold',
//             fontSize: { xs: 30, sm: 35, md: 40, lg: 50 },
//           }}
//         >
//           Todo List
//         </Typography>
//         <Typography
//           sx={{
//             color: 'white',
//             fontWeight: 'bold',
//             fontSize: { xs: 25, sm: 30, md: 35, lg: 38 },
//           }}
//         >
//           A simple react todo list app
//         </Typography>
//         <Divider sx={{ width: '100%', backgroundColor: 'white', height: 10 }} />

//         {/* Display the list of todos */}
//         <Box sx={{ mt: 4, color: 'white' }}>
//           {todos.length > 0 && (
//             <Typography variant="h6">Your Todos:</Typography>
//           )}
//           {todos.map((todo, index) => (
//             <Box
//               key={index}
//               sx={{ display: 'flex', alignItems: 'center', pt: 1 }}
//             >
//               <Typography sx={{ flexGrow: 1 }}>
//                 {index + 1}.{todo}
//               </Typography>
//               <EditIcon
//                 onClick={() => handleEditTodo(index)}
//                 sx={{ cursor: 'pointer', color: 'white', ml: 1 }}
//               />
//               <DeleteIcon
//                 onClick={() => handleDeleteTodo(index)}
//                 sx={{ cursor: 'pointer', color: 'white', ml: 1 }}
//               />
//             </Box>
//           ))}
//         </Box>

//         <Typography sx={{ fontSize: 35, color: 'white', pt: 10 }}>
//           Add New Todo
//         </Typography>
//         <TextField
//           id="outlined-multiline-flexible"
//           variant="standard"
//           placeholder="New Todo"
//           value={currentTodo}
//           onChange={(e) => setCurrentTodo(e.target.value)}
//           sx={{
//             width: '300px',
//             '& .MuiInputBase-input': { height: '40px', color: 'white' },
//             borderBottom: '1px solid #727272',
//             '& .MuiInputBase-root': {
//               borderBottom: '1px solid #727272',
//             },
//             '& .MuiInputBase-root:before': {
//               borderBottom: '1px solid #727272',
//             },
//             '& .MuiInputBase-root:after': {
//               borderBottom: '2px solid white',
//             },
//             '& .MuiInputLabel-root': {
//               color: '#727272',
//             },
//             '& .MuiInputLabel-root.Mui-focused': {
//               color: 'white',
//             },
//           }}
//         />
//         <Button
//           variant="standard"
//           onClick={handleAddEditTodo}
//           sx={{
//             color: 'white',
//             outlineColor: 'white',
//             border: 1,
//             ml: 2,
//             fontSize: 25,
//           }}
//         >
//           {editIndex !== null ? 'Update Todo' : 'Add Todo'}
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// //database
// mongoose
//   .connect(
//     'mongodb+srv://malaikatayyab:123456mt@cluster0.21x5t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//   )
//   .then(() => {
//     console.log('Connected to Database');
//   })
//   .catch(() => {
//     console.log('Connection failed');
//   });
