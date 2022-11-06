const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

// router
const EmployeeRoute = require("./routes/employees");
const CompanyRoute = require("./routes/company");

const app = express();

// connect to db
const db = process.env.DB;
mongoose.connect(db, {});

// middlewares

app.use(express.json());

// api of employees

app.use("/api/data/employee", EmployeeRoute);
app.use("/api/data/company", CompanyRoute);

// server start
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
