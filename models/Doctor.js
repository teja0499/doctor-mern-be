const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  profilePicture: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  mobileNumber: {
    type: String,
    unique: true,
    required: true
  },
  yearsOfExperience: {
    type: Number
  },
  address: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  adminApprove: {
    type: Boolean,
    default: false
  },
  adminView: {
    type: Boolean,
    default: false
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
