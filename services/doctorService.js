const Doctor = require('../models/Doctor');

const signUp = async (doctorData) => {
 
  const existingDoctorByMobile = await Doctor.findOne({ mobileNumber: doctorData.mobileNumber });
  if (existingDoctorByMobile) throw new Error('Mobile Number Already exist');

  const existingDoctorByEmail = await Doctor.findOne({ email: doctorData.email });
  if (existingDoctorByEmail) throw new Error('Email Already exist');

  const doctor = await Doctor.create(doctorData);
  return doctor;
};

const login = async (email, password) => {
  
    const doctor = await Doctor.findOne({ email, password });
    if (!doctor) throw new Error('Credential mismatch');
    return doctor;
 
};

const getAllDoctors = async () => {
  try {
    const doctors = await Doctor.find({ adminApprove: true });
    doctors.forEach(doctor => doctor.password = null);
    return doctors;
  } catch (error) {
    throw new Error('Error fetching all doctors: ' + error.message);
  }
};

const getNewDoctors = async () => {
  try {
    const doctors = await Doctor.find({ adminView: false });
    doctors.forEach(doctor => doctor.password = null);
    return doctors;
  } catch (error) {
    throw new Error('Error fetching new doctors: ' + error.message);
  }
};

const updateDoctor = async (doctorData) => {
  try {
    const _id = doctorData._id;
    const doctor = await Doctor.findOneAndUpdate(
    { _id },
    {
        $set: {
            adminView: true,
            adminApprove: doctorData.adminApprove
        }
    },
    { new: true } 
);
if (!doctor) {
    throw new Error('Doctor not found');
}
return doctor;
  } catch (error) {
    throw new Error('Error updating doctor: ' + error.message);
  }
};

module.exports = {
  signUp,
  login,
  getAllDoctors,
  getNewDoctors,
  updateDoctor
};
