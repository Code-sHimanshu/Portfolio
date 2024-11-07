const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined');
        }
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB से कनेक्शन सफल रहा!');
    } catch (error) {
        console.error('MongoDB कनेक्शन एरर:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB; 