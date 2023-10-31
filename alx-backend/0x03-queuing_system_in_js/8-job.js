export function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  jobs.forEach((jobData) => {
    const job = queue.create('push_notification_code_3', jobData)
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
};`
`
