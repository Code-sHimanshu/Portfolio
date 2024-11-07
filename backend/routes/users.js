const express = require('express');
const router = express.Router();

// GET /api/users
router.get('/', async (req, res) => {
    try {
        // यूजर्स की लिस्ट
        res.json({ message: 'Users list' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST /api/users
router.post('/', async (req, res) => {
    try {
        // नया यूजर बनाएं
        res.json({ message: 'User created' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}); 