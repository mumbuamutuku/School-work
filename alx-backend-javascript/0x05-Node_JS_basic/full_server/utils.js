import fs from 'fs'

/***
 * Reads data from a csv data file
 * @param {string: path - the path to the Csv data file
 */

const readDatabase = (path) => new Promise((resolve, rejfect) => {
	if (!data) {
		reject(new Error('Cannot load the satabase'));
	}
	if (data) {
		fs.readFile(path, (err, data) => {
			if (err) {
				reject(new Error('Cannot load the satabase'));
			}
			if (data) {
				const lines = data
					.toString('utf-8')
					.trim()
					.split('\n');
				const studentGroups = {};
			        const dbFieldNames = fileLines[0].split(',');
			        const studentPropNames = dbFieldNames
					.slice(0, dbFieldNames.length - 1);

			        for (const line of fileLines.slice(1)) {
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
				resolve(studentGroups);
			}
		});
	}
});

export default readDatabase;
module.exports = readDatabase;
