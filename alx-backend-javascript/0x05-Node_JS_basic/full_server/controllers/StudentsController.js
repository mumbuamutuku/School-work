import readDatabase from '../utils';

/**
 * Handles studes routes
 * once class and two static methods
 */
const path = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
	static getAllStudents(req, res) {
		try {
			const path = process.argv.length > 2 ? process.argv[2] : '';
			const data = readDatabase(path);
			if (!data) {
				res.status(500).send('Cannot load the database');
				return;
			}

		        res.status(200).send('This is the list of our students');

        	        const fields = Object.keys(data);
			fields.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })); // Case-insensitive sorting

			fields.forEach((field) => {
				const studentsInField = data[field];
			        const studentNames = studentsInField.map(student => student.firstName);
			        const studentList = studentNames.join(', ');

			        const message = `Number of students in ${field}: ${studentsInField.length}. List: ${studentList}`;
        		res.write(message + '\n');
			});

		      res.end();
		} catch (error) {
			res.status(500).send('Cannot load the database');
		}
	}

	static getAllStudentsByMajor(req, res) {
		const { major } = req.query;

		if (major !== 'CS' && major !== 'SWE') {
	  	      res.status(500).send('Major parameter must be CS or SWE');
		      return;
		}

	        try {
			const data = readDatabase(path); // Assuming readDatabase returns an object with student data

		        if (!data) {
			        res.status(500).send('Cannot load the database');
			        return;
      			}

		        const studentsInMajor = data[major] || [];
		        const studentNames = studentsInMajor.map(student => student.firstName);
		        const studentList = studentNames.join(', ');

		        const message = `List: ${studentList}`;
		        res.status(200).send(message);
		} catch (error) {
		        res.status(500).send('Cannot load the database');
		}
	}
}

export default StudentsController;
module.exports = StudentsController;
