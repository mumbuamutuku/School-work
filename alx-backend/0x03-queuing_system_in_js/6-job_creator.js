// Import the necessary library
import kue from 'kue';

// Create a Kue queue
const queue = kue.createQueue();

// Object containing the job data
const jobData = {
  phoneNumber: '4153518780',
  message: 'This is the code to verify your account',
};

// Create a job in the queue
const job = queue.create('push_notification_code', jobData)
  .save((error) => {
    if (!error) {
      console.log(`Notification job created: ${job.id}`);
    }
  });

// Event listener when the job is completed
job.on('complete', () => {
  console.log('Notification job completed');
});

// Event listener when the job encounters an error
job.on('failed', () => {
  console.log('Notification job failed');
});

