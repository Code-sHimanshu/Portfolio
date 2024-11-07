const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post('/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Save to database
        const contact = new Contact({
            name,
            email,
            message
        });
        await contact.save();

        // Send email notification
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'your@email.com', // आपका ईमेल
            subject: 'New Contact Form Submission',
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `
        });

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending message' });
    }
});

module.exports = router; 