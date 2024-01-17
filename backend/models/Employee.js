const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
