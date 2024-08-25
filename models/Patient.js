const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  profilePicture: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
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
  surgery: {
    type: String,
    required: false
  },
  illness: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
 
});


const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
