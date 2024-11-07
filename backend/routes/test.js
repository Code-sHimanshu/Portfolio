const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/db-test', async (req, res) => {
    try {
        // Check if database is connected
        if (mongoose.connection.readyState === 1) {
            res.json({ status: 'success', message: 'डेटाबेस से कनेक्शन सफल है!' });
        } else {
            res.status(500).json({ status: 'error', message: 'डेटाबेस से कनेक्शन नहीं है!' });
        }
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

module.exports = router; 