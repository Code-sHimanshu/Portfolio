module.exports = {
  apps: [{
    name: "portfolio-backend",
    script: "./backend/server.js",
    instances: "max",
    exec_mode: "cluster",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}; 