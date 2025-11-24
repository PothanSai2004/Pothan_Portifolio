const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { getData, updateData, getMessages, saveMessage, deleteMessage } = require('./dataController');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Save to client/public/uploads so they are accessible
    cb(null, path.join(__dirname, '../client/public/uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Upload endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // Return the path relative to public folder
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Get all portfolio data
app.get('/api/data', async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Update portfolio data (Protected in real app, open for demo)
app.post('/api/data', async (req, res) => {
  try {
    const newData = req.body;
    await updateData(newData);
    res.json({ success: true, message: 'Data updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update data' });
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const messageData = req.body;
    await saveMessage(messageData);
    console.log(`[CONTACT FORM] Saved message from: ${messageData.email}`);
    res.json({ success: true, message: 'Message sent!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// Get messages (Admin only)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await getMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// Delete message
app.delete('/api/messages/:id', async (req, res) => {
  try {
    await deleteMessage(req.params.id);
    res.json({ success: true, message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
