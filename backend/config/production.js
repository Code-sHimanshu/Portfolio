module.exports = {
  mongodb: {
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }
  },
  server: {
    trustProxy: true,
    compression: true
  }
}; 