const express = require("express");
const cors = require("cors");
const app = express();

const employeeRoutes = require("./api/Routes/employee.routes");
const adminRoutes = require("./api/Routes/admin.routes");

app.use(express.json());
app.use(cors());

app.use("/api/employee", employeeRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
