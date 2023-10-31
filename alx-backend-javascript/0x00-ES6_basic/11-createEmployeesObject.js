export default function createEmployeesObject(departmentName, employees) {
  const dpobj = {
    [departmentName]: [...employees],
  };

  return dpobj;
}
