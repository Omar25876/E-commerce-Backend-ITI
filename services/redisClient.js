const redis = require("redis");

// Create a Redis client
const client = redis.createClient({
  socket: {
    host: "127.0.0.1",
    port: 6379,
    reconnectStrategy: (retries) => {
      if (retries > 10) {
        console.log("Too many retries on Redis. Connection Terminated");
        return new Error("Too many retries.");
      }
      return Math.min(retries * 100, 5000);
    },
  },
});

client.on("error", (err) => console.error("Redis Client Error", err));

// Connect to Redis
async function connectRedis() {
  if (!client.isOpen) {
    await client.connect(); 
    console.log("Redis connected successfully");
  }
}


module.exports = {
  client,
  connectRedis,
};
