const CompanyDetails = require("../model/company");
const asyncHandler = require("express-async-handler");

const CompanyData = asyncHandler(async (req, res) => {
  const data = await CompanyDetails.find();

  res.status(200).json({
    status: "success",
    companys: data.length,
    data,
  });
});

const createCompanyDetails = asyncHandler(async (req, res) => {
  const data = await CompanyDetails.create(req.body);

  res.status(201).json({
    status: "success",
    msg: "company details has created successfully",
    data,
  });
});

module.exports = {
  CompanyData,
  createCompanyDetails,
};
