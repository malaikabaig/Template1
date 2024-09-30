const Todo = require('../models/productModel.js');

// Get all todos
const allTodos = async (req, res) => {
  // try {
  //   const todos = await Todo.find();
  //   res.json(todos);
  // } catch (err) {
  //   res.status(500).send('Server error');
  // }
  try {
    const { id } = req.params;
    const product = await Todo.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new todo
const addTodo = async (req, res) => {
  console.log('nody', req.body);

  // const newTodo = new Todo({
  //   text: req.body.text,
  // });

  // try {
  //   const savedTodo = await newTodo.save();
  //   res.json(savedTodo);
  // } catch (err) {
  //   res.status(500).send('Server error');
  // }

  try {
    const product = new Todo(req.body);
    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  // try {
  //   await Todo.findByIdAndDelete(req.params.id);
  //   res.json({ message: 'Todo deleted' });
  // } catch (err) {
  //   res.status(500).send('Server error');
  // }

  try {
    const { id } = req.params;

    const product = await Todo.findByIdAndDelete(id);

    if (!product || product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted succesfull' });
  } catch (error) {
    res
      .status(500)
      .json({ message: error ? error.message : 'Something went wrong' });
  }
};

//Update a todo

const updateTodo = async (req, res) => {
  // try {
  //   const product = await Todo.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true,
  //   });
  //   res.status(200).json(product);
  //   res.json({ message: 'Todo Updated' });
  // } catch (err) {
  //   res.status(500).send('Server error');
  // }

  try {
    console.log('body', req.body);
    console.log('params', req.params);

    const { id } = req.params;
    const product = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log('product', product);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
    console.log('body', req.body);
  } catch (error) {
    console.log('error in catch', error);

    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  allTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
