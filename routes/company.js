const express = require("express");
const router = express.Router();
const { CompanyData, createCompanyDetails } = require("../controller/company");

router.route("/").get(CompanyData).post(createCompanyDetails);

module.exports = router;
