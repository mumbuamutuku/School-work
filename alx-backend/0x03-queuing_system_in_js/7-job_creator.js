// Import the necessary library
import kue from 'kue';

// Create a Kue queue
const queue = kue.createQueue();

// Object containing the job data
const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];

// Loop through the array of jobs and create Kue jobs
jobs.forEach((jobData) => {
  const job = queue.create('push_notification_code_2', jobData)
    .save((error) => {
      if (!error) {
        console.log(`Notification job created: ${job.id}`);
      }
    });

  // Event listener when the job is completed
  job.on('complete', () => {
    console.log(`Notification job ${job.id} completed`);
  });

  // Event listener when the job encounters an error
  job.on('failed', (error) => {
    console.log(`Notification job ${job.id} failed: ${error}`);
  });

  // Event listener for job progress
  job.on('progress', (progress) => {
    console.log(`Notification job ${job.id} ${progress}% complete`);
  });
});
