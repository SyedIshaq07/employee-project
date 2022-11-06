const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "please provide comapny name"],
  },
  Domain: {
    type: String,
    required: [true, "please provide company services"],
  },
});

const CompanyDetails = new mongoose.model("CompanyDetails", companySchema);

module.exports = CompanyDetails;
