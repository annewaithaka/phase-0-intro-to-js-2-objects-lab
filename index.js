let employee = {
  name: 'Garvin', 
  role: 'MD'  
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = {
    ...employee,
    [key]: value
  };
  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const deleteEmployee = { ...employee };
  delete deleteEmployee[key];
  return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
