const Consultation = require('../models/Consultation');

const saveConsultation = async (consultationData) => {
  try {
    const consultation = await Consultation.create(consultationData);
    return consultation;
  } catch (error) {
    throw new Error('Error saving consultation: ' + error.message);
  }
};

const findByDid = async (did) => {
  try {
    const consultations = await Consultation.find({ did, view: true });
    return consultations.reverse();  
  } catch (error) {
    throw new Error('Error finding consultations by DID: ' + error.message);
  }
};

const findByPid = async (pid) => {
  try {
    const consultations = await Consultation.find({ pid });
    return consultations.reverse(); 
  } catch (error) {
    throw new Error('Error finding consultations by PID: ' + error.message);
  }
};

const findByDidAndDoctorViewFalse = async (did) => {
  try {
    const consultations = await Consultation.find({ did, view: false });
    return consultations.reverse(); 
  } catch (error) {
    throw new Error('Error finding consultations by DID and doctor view false: ' + error.message);
  }
};

const updateConsultation = async (consultationData) => {
  try {
    consultationData.view = true; 
    return await Consultation.findByIdAndUpdate(consultationData._id, consultationData, { new: true });
  } catch (error) {
    throw new Error('Error updating consultation: ' + error.message);
  }
};

const getAllConsultations = async () => {
  try {
    const consultations = await Consultation.find();
    return consultations.reverse(); 
  } catch (error) {
    throw new Error('Error getting all consultations: ' + error.message);
  }
};

const existsByTransactionId = async (transactionId) => {
  try {
    const flag=await Consultation.findOne({ transactionId }); 
    console.log(flag);
    console.log(flag===null);
    
    return flag===null;
  } catch (error) {
    throw new Error('Error checking existence by transaction ID: ' + error.message);
  }
};

module.exports = {
  saveConsultation,
  findByDid,
  findByPid,
  findByDidAndDoctorViewFalse,
  updateConsultation,
  getAllConsultations,
  existsByTransactionId
};
