const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const dbfile = process.argv.length > 2 ? process.argv[2] : '';

/**
 * count students in a csv file
 * @param {string} path . the path to CSV data file
 */

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(
          0,
          dbFieldNames.length - 1,
        );

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const resp = ['This is the list of our students'];

  countStudents(dbfile)
    .then((report) => {
      resp.push(report);
      const respText = resp.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', respText.length);
      res.statusCode = 200;
      res.write(Buffer.from(respText));
    })
    .catch((err) => {
      resp.push(err instanceof Error ? err.message : err.toString());
      const respText = resp.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', respText.length);
      res.statusCode = 200;
      res.write(Buffer.from(respText));
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
