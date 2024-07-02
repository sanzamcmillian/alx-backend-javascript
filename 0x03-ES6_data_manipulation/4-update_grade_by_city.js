export default function updateStudentGradeByCity(student, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (!(student instanceof Array)) {
    return [];
  }
  return student
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
