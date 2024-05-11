const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.routes.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello from Node API Server');
});



app.delete('/api/products/:id', async (req, res) => {
 
});

mongoose
  .connect(
    'mongodb+srv://elsheikhsaf:7wZCZ74jFiLPjOxy@backenddb.bgodyzs.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('Connected to the database!');
    app.listen(3001, () => {
      console.log('server is running on port 3001');
    });
  })
  .catch(() => {
    console.log('Connection failed!');
  });
