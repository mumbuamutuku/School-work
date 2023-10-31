const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
        if (url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello Holberton School!');
        } else if (url === '/students') {
            const databasePath = path.join(__dirname, 'database.csv');
            countStudents(databasePath, (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(data);
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

const countStudents = (path, callback) => new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
                if (err) {
                        reject(new Error('Cannot load the database'));
                }
                if (data) {
                        const lines = data
                                .toString('utf-8')
                                .trim()
                                .split('\n');
                        const studentGroups = {}
                        const dbfielname = lines[0].split(',');
                        const studentPropNames = dbfielname
                                .slice(0, dbfielname.length - 1);
                        for (const line of lines.slice(1)) {
                                const studentRecord = line.split(',');
                                const studentPropValues = studentRecord
                                        .slice(0, studentRecord.length - 1);
                                const field = studentRecord[studentRecord.length - 1];
                                if (!Object.keys(studentGroups).includes(field)) {
                                        studentGroups[field] = [];
                                }
                                const studentEntries = studentPropNames
                                        .map((propName, idx) => [propName, studentPropValues[idx]]);
                                studentGroups[field].push(Object.fromEntries(studentEntries));
                        }

                        const totalStudents = Object
                                .values(studentGroups)
                                .reduce((pre, cur) => (pre || []).length + cur.length);
                        console.log(`Number of students: ${totalStudents}`);

                        for (const [field, group] of Object.entries(studentGroups)) {
                                const studentNames = group.map((student) => student.firstname).join(', ');
                                console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
                        }
                        resolve(true);
                }
        });
});

module.exports = app;

