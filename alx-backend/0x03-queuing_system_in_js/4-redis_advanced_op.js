// Import the necessary library
import redis from 'redis';

// Create a Redis client instance
const client = redis.createClient();

// Event listeners to handle connection status
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (error) => {
  console.error('Redis client not connected to the server:', error.message);
});

// Function to create a hash
function createHash() {
  client.hset('HolbertonSchools', 'Portland', 50, redis.print);
  client.hset('HolbertonSchools', 'Seattle', 80, redis.print);
  client.hset('HolbertonSchools', 'New York', 20, redis.print);
  client.hset('HolbertonSchools', 'Bogota', 20, redis.print);
  client.hset('HolbertonSchools', 'Cali', 40, redis.print);
  client.hset('HolbertonSchools', 'Paris', 2, redis.print);
}

// Function to display the hash
function displayHash() {
  client.hgetall('HolbertonSchools', (error, result) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Hash:', result);
    }
  });
}

// Call the functions
createHash();
displayHash();

