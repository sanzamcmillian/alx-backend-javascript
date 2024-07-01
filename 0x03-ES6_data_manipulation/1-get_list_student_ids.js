export default function getListStudentIds(student) {
  if (!(student instanceof Array)) {
    return [];
  }
  return student.map((student) => student.id);
}
