const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoute = require('./routes/product.routes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', productRoute);

app.listen(7080, () => console.log('Server running on port'));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://malaikatayyab:123456mt@cluster0.21x5t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));
