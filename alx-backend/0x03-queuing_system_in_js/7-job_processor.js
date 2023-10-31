// Import the necessary library
import kue from 'kue';

// Create an array of blacklisted phone numbers
const blacklistedNumbers = ['4153518780', '4153518781'];

// Function to send a notification
function sendNotification(phoneNumber, message, job, done) {
  if (blacklistedNumbers.includes(phoneNumber)) {
     return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  } 
    job.progress(0, 50); // Track progress at 50%
    job.progress(50, 100); // Track progress at 100%
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
    return done();
    }


// Create a Kue queue for push_notification_code_2
const queue = kue.createQueue({
  concurrency: 2, // Process two jobs at a time
});

// Process jobs in the queue
queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});

