const express = require("express");
const router = express.Router();
const { employeesData, createEmployee } = require("../controller/employees");

router.route("/").get(employeesData).post(createEmployee);

module.exports = router;
