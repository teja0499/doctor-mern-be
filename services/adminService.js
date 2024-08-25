const Admin = require('../models/Admin');

const signUp = async (adminData) => {
  try {
    // const newAdmin = new Admin(adminData);
    // return await newAdmin.save();
    return Admin.create(adminData)
  } catch (error) {
    throw new Error('Error signing up admin: ' + error.message);
  }
};

const login = async (email, password) => {

    console.log("login" ,email,password);
    const admin = await Admin.findOne({ email, password });
    if (!admin) {
      throw new Error('Credential mismatch');
    }
    return admin;
};

module.exports = { signUp, login };
