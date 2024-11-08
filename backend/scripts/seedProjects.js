const mongoose = require('mongoose');
const Project = require('../models/Project');
require('dotenv').config();

const dummyProjects = [
    {
        title: "E-commerce Website",
        description: "A full-stack e-commerce platform built with MERN stack",
        imageUrl: "https://example.com/ecommerce.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        githubLink: "https://github.com/yourusername/ecommerce",
        liveLink: "https://ecommerce-demo.com"
    },
    {
        title: "Chat Application",
        description: "Real-time chat application with WebSocket",
        imageUrl: "https://example.com/chat.jpg",
        technologies: ["Socket.io", "React", "Node.js", "Express"],
        githubLink: "https://github.com/yourusername/chat-app",
        liveLink: "https://chat-demo.com"
    },
    // और प्रोजेक्ट्स जोड़ें
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await Project.deleteMany({}); // पहले सभी प्रोजेक्ट्स डिलीट करें
        await Project.insertMany(dummyProjects);
        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase(); 