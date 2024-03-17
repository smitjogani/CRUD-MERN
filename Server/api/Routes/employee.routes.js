const express = require("express");
const router = express.Router();
const employeeContoller = require("../Controller/employee.controller");

router.post("/addEmployee", employeeContoller.createEmployee);
router.get("/", employeeContoller.getAllemployee);
router.delete("/deleteEmployee/:id",employeeContoller.deleteEmployee);
router.put("/updateEmployee/:id",employeeContoller.updateEmployee);

module.exports = router;