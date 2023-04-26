function updateStudentGradeByCity(studentList, city, newGrades) {
  const updatedStudents = [];
  
  for (const student of studentList) {
    if (student.city === city) {
      const newGradeObj = newGrades.find(obj => obj.studentId === student.id);
      if (newGradeObj) {
        student.grade = newGradeObj.grade;
      }   
      updatedStudents.push(student);
    }
  } 
  return updatedStudents;
}
