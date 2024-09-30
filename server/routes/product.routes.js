const express = require('express');
const router = express.Router();
const {
  allTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/product.controller');

router.get('/all', allTodos);

router.post('/add', addTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = router;
