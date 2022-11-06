const Employee = require("../model/employees");
const asyncHandler = require("express-async-handler");

const employeesData = asyncHandler(async (req, res) => {
  const data = await Employee.find().populate("company_ID");

  res.status(200).json({
    status: "success",
    Employees: data.length,
    data,
  });
});

const createEmployee = asyncHandler(async (req, res) => {
  const data = await Employee.create(req.body);

  res.status(201).json({
    status: "success",
    msg: "data created successfully",
    data,
  });
});

module.exports = {
  employeesData,
  createEmployee,
};
