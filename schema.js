const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    emailId: String,
    id: String,
  },
  { timestamps: true }
);
const Empmodel = mongoose.model("employees", EmployeeSchema);
module.exports = Empmodel;
