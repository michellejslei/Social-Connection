const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://funger:goalie@cluster0.lb5eviq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Schema for the data
const dataSchema = new mongoose.Schema({
  userInput: String,
});

const Data = mongoose.model('Data', dataSchema);

// Middleware to parse JSON
app.use(express.json());

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
/// Serve Another HTML
app.get('/another', (req, res) => {
    res.sendFile(__dirname + '/anotherPage.html');
  });

// Handle POST request
app.post('/api/data', async (req, res) => {
  try {
    const { userInput } = req.body;

    // Insert data into MongoDB
    const result = await Data.create({ userInput });

    res.status(201).json({ message: 'Data added successfully', insertedId: result._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
