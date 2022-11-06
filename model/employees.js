const mongoose = require("mongoose");
const CompanyDetails = require("./company");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide employee name"],
  },
  email: {
    type: String,
    required: [true, "please provide employee emial"],
    unique: true,
  },
  salary: {
    type: Number,
    // required: [true, "please provide employee salary"],
    validate: {
      validator: (val) => {
        return val >= 20000;
      },
      message: "salary cannot be less than 2000",
    },
  },
  department: {
    type: String,
    required: [true, "please provide employee department"],
  },
  companyName: {
    type: String,
    required: true,
  },
  company_ID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: CompanyDetails,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
