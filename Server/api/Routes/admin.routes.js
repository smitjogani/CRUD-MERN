const express = require("express");
const router = express.Router();
const adminContoller = require("../Controller/admin.controller");

router.post("/login", adminContoller.login);
router.post("/signup", adminContoller.register);

module.exports = router;
