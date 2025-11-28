// server.js

// 1. Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 2. Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// 3. Middleware setup
app.use(cors({
  orgin: [

 "https://josephschemicalletter-unda.vercel.app/", //your frontend
    "https://localhost:3000"
   ],
   methods: "GET,POST",
   credentials: true
})); // Enable CORS for all routes to allow your React app to connect
app.use(express.json()); // Enable JSON body parsing for incoming requests

// 4. Connect to MongoDB Atlas
// IMPORTANT: The '@' in the password has been URL-encoded to '%40' to prevent connection errors.
const uri = "mongodb+srv://josephschemicalletter:Cp2fZfBDnWnBJ2c7@database.cj7ntxp.mongodb.net/?retryWrites=true&w=majority&appName=Database";

mongoose.connect(uri)
  .then(() => console.log("MongoDB Atlas connection successful."))
  .catch(err => console.error("MongoDB connection error:", err));

// 5. Define the Mongoose Schema and Model
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Prevents duplicate email entries
  },
  subscribeDate: {
    type: Date,
    default: Date.now,
  },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// 6. Create the API endpoint
app.post('/api/subscribe', async (req, res) => {
  const { name, email } = req.body;

  // Basic server-side validation
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    const newSubscriber = new Subscriber({ name, email });
    await newSubscriber.save();
    console.log(`New subscriber added: ${email}`);
    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    // Handle duplicate email error and other server errors
    if (error.code === 11000) {
      return res.status(409).json({ message: 'This email is already subscribed.' });
    }
    console.error('Error saving subscriber:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// 7. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
