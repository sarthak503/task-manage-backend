const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3001; // Change as per your requirements

app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/task-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
