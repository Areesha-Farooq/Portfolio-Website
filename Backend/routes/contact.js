import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// POST /api/contact — save a new contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are all required.' });
    }

    const newMessage = await Message.create({ name, email, message });

    return res.status(201).json({
      success: true,
      message: 'Message saved successfully.',
      data: newMessage,
    });
  } catch (err) {
    console.error('Error saving contact message:', err);
    return res.status(500).json({ error: 'Something went wrong on the server.' });
  }
});

// GET /api/contact — list all messages (useful for a future admin view)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    return res.status(500).json({ error: 'Something went wrong on the server.' });
  }
});

export default router;
