const jwtProvider = require("../../config/jwtProvider");
const employeeService = require("../Services/employee.service");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(404).send({ error: "Token not found" });
    }
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = employeeService.findUserById(userId);

    req.employee = employee;
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  next();
};

module.exports = authenticate;
