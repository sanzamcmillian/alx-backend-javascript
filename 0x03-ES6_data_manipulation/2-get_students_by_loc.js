export default function getStudentsByLocation(student, city) {
  return student.filter((student) => city === student.location);
}
