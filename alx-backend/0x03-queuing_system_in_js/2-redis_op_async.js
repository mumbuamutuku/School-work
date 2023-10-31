import redis from 'redis';
import { promisify } from 'util';

// Create a Redis client instance
const client = redis.createClient();


// Promisify the get function
const getAsync = promisify(client.get).bind(client);

// Event listeners to handle connection status
client.on('connect', () => {
	console.log('Redis client connected to the server');
});

client.on('error', (error) => {
	console.error('Redis client not connected to the server', error.message);
});

// Function to set a new school value
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

// Function to display school value
async function displaySchoolValue(schoolName) {
  try {
    const value = await getAsync(schoolName);
    console.log(value);
  } catch (error) {
      console.error('Error:', error.message);
    } 
}

// Call the functions
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
