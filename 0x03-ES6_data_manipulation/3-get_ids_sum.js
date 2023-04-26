export default function getStudentIdsSum(student) {
  return student.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
