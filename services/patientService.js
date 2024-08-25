const Patient = require('../models/Patient');

const signUp = async (patientData) => {
    // Check for existing patient by mobile number
    const existingPatientByMobile = await Patient.findOne({ mobileNumber: patientData.mobileNumber });
    if (existingPatientByMobile) {
        throw new Error('Mobile Number Already exists');
    }

    // Check for existing patient by email
    const existingPatientByEmail = await Patient.findOne({ email: patientData.email });
    if (existingPatientByEmail) {
        throw new Error('Email Already exists');
    }

    // Create and return new patient record
    const patient = await Patient.create(patientData);
    return patient;
};

const login = async (email, password) => {
    console.log("patient login");
    
    const patient = await Patient.findOne({ email, password });
    if (!patient) {
        throw new Error('Credential mismatch');
    }
    return patient;
};

const getAllUsers = async () => {
    return await Patient.find();
};

module.exports = {
    signUp,
    login,
    getAllUsers
  };
