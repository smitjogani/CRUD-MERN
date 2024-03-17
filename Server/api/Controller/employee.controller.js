const EmployeeService = require("../Services/employee.service");

const createEmployee = async (req, res) => {
  try {
    const employee = await EmployeeService.createEmployee(req.body);
    return res.status(201).send(employee);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllemployee = async (req, res) => {
  try {
    const employees = await EmployeeService.getAllemployee();
    return res.status(201).send(employees);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await EmployeeService.deleteEmployee(id);
    return res.status(201).send(result);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await EmployeeService.updateEmployee(id, req.body);
    return res.status(201).send(employee);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createEmployee,
  getAllemployee,
  deleteEmployee,
  updateEmployee,
};
