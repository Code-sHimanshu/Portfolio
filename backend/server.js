require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const helmet = require('helmet');
const { errorHandler } = require('./middleware/errorHandler');
const { limiter } = require('./middleware/auth');
const compression = require('compression');

const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

// Load env vars
dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Security Middleware
app.use(helmet());
app.use(limiter);

// Production optimizations
if (process.env.NODE_ENV === 'production') {
  app.use(compression());
}

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;

// Server start only when directly run
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} 