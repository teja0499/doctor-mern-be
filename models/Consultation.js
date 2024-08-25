const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consultationSchema = new Schema({
  patientName: {
    type: String,
    required: true
  },
  did: {
    type: Schema.Types.ObjectId, 
    ref: 'Doctor', 
    required: true
  },
  pid: {
    type: Schema.Types.ObjectId,
    ref: 'Patient', 
    required: true
  },
  currentIllness: {
    type: String
  },
  recentSurgery: {
    type: String
  },
  diabetics: {
    type: String
  },
  allergies: {
    type: String
  },
  others: {
    type: String
  },
  address: {
    type: String
  },
  medicine: {
    type: String
  },
  careToBeTaken: {
    type: String
  },
  date: {
    type: String
  },
  view: {
    type: Boolean,
    default: false
  },
  transactionId: {
    type: String,
    unique: true
  },
  doctorName: {
    type: String
  }
});

const Consultation = mongoose.model('Consultation', consultationSchema);

module.exports = Consultation;
