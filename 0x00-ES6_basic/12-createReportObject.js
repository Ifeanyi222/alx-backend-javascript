export default function createReportObject(employeesList) {
  const allEmployees = employeesList.reduce((acc, employee) => {
    const { department, ...employeeData } = employee;
    if (!acc[department]) {
      acc[department] = { department, employees: [] };
    }
    acc[department].employees.push(employeeData);
    return acc;
  }, {});

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}
