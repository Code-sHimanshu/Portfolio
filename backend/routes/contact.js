const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Add your contact form logic here
        res.json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 