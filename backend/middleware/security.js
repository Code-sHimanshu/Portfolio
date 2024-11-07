const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// रेट लिमिटर सेटअप
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 मिनट
    max: 100 // हर IP से अधिकतम 100 रिक्वेस्ट
});

// सिक्योरिटी मिडलवेयर
const setupSecurity = (app) => {
    app.use(helmet()); // सिक्योरिटी हेडर्स
    app.use(limiter); // रेट लिमिटिंग
    
    // CORS सेटअप
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });
};

module.exports = setupSecurity; 