const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const tasksRouter = require('./routes/Task');

const app = express();
const port = process.env.PORT||3001; // Change as per your requirements

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

  const con = mongoose.connection //creating a connection
  con.on('open', () => {
      console.log('Connected...')     //confirmation message on establishment of connection
  })
  
app.use('/api', tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
