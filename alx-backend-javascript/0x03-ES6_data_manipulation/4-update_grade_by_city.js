export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList) || !Array.isArray(newGrades)) {
    return [];
  }

  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
