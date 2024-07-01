export default function getStudentIdsSum(student) {
  return student.reduce((total, num) => total.id || total + num.id, 0);
}
