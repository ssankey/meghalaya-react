import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import twilio from 'twilio'
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Import dotenv
import { fileURLToPath } from 'url'; // Import fileURLToPath
import { dirname } from 'path'; // Import dirname
import path from 'path';
// Get the directory path using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config();
const app = express();
import reviewRouter from './routers/reviews.js'
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.use('/api/reviews', reviewRouter);

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Access environment variable
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

app.get('/send-message', (req, res) => {
  const formData = req.query;

  // Extract text content from the formData object
  const messageText = Object.entries(formData)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  client.messages
    .create({
      body: messageText,
      from: '+13155992527',
      to: '+917005366288'
    })
    .then(message => {
      console.log(message.sid);
      res.send('Message sent successfully.'); // Sending a response back to the client
    })
    .catch(error => {
      console.error('Error sending message:', error);
      res.status(500).send('Failed to send message.'); // Sending an error response back to the client
    });
});

const cacheTime = 86400000; // 1 day in milliseconds

// Serve static files from the "build" directory of your frontend
app.use(express.static(path.join(__dirname, 'frontend/build'), { maxAge: cacheTime }));

// Other routes and configurations for your backend

// Send index.html for all other requests to support React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});



// Connect to MongoDB
const mongoURI = process.env.DATABASE; // Replace with your MongoDB connection URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server started on port ${port}`)))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
