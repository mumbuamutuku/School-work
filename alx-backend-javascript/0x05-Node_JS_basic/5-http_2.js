const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DBFILE = process.argv.length>2?process.argv[2] : '';

/**
 * count student in CSV data file
 * @param (String} path - the path to Csv data file
 */

const countStudents = (path) => new Promise((resolve, reject) => {
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
                        reportParts.push(`Number of students: ${totalStudents}`);

                        for (const [field, group] of Object.entries(studentGroups)) {
                                const studentNames = group.map((student) => student.firstname).join(', ');
                                reportParts.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
                        }
                        resolve(reportParts.join('\n'));
                }
        });
}
});

const SERVERHANDLERS = [
	{
		route: '/',
		handler(res) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Hello Holberton School!');
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app;

