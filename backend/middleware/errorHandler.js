const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // मॉनगूस वैलिडेशन एरर
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            status: 'error',
            message: Object.values(err.errors).map(e => e.message)
        });
    }

    // डुप्लिकेट की एरर
    if (err.code === 11000) {
        return res.status(400).json({
            status: 'error',
            message: 'Duplicate field value entered'
        });
    }

    // JWT एरर
    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
            status: 'error',
            message: 'Invalid token'
        });
    }

    // डिफ़ॉल्ट एरर
    res.status(err.status || 500).json({
        status: 'error',
        message: err.message || 'Internal server error'
    });
};

module.exports = errorHandler; 