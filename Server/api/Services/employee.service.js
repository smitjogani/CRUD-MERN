const employee = require("../Models/Employee/employee.model");

async function createEmployee(userData) {
  let { name, email, mobileNo, designation, gender, course, image } = userData;

  try {
    const isEmployeeExists = await employee.findOne({ email });

    if (isEmployeeExists) {
      throw new Error("Employee is already existed : ", email);
    }

    const userCreate = await employee.create({
      name,
      email,
      mobileNo,
      designation,
      gender,
      course,
      image,
    });

    return userCreate;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findEmployeeById(id) {
  try {
    const employeeResult = await employee.findById(id);

    if (!employeeResult) {
      throw new Error("emmployee not found with this id : ", id);
    }

    return employeeResult;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllemployee() {
  try {
    const employeeList = await employee.find();

    return employeeList;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteEmployee(id) {
  // const employee = await findEmployeeById(id);
  try {
    const deleteData = employee.findByIdAndDelete(id);
    if (!deleteData){
      return res.status(404).json({ error: 'Employee not found' });
    }
    return 
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateEmployee(id, reqData) {
  return await employee.findByIdAndUpdate(id, reqData);
}

module.exports = {
  createEmployee,
  findEmployeeById,
  getAllemployee,
  deleteEmployee,
  updateEmployee,
};
