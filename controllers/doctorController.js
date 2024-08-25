const express = require('express');
const router = express.Router();
const doctorService= require('../services/doctorService');
const multer = require('multer');

// Helper for file upload (you can use a service like AWS S3 or local storage)
const upload = multer({ dest: 'uploads/' });

// Sign up
router.post('/doctor/sign_up', upload.single('file'), async (req, res) => {
    try {
        console.log("doctor sign up");
        
        const newDoctor = JSON.parse(req.body.data);

        if (req.file) {
            newDoctor.profilePicture = req.file.path;  
        }

        const doctor = await doctorService.signUp(newDoctor);

        res.status(200).json(doctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Login
router.post('/doctor/login', async (req, res) => {
    const { email, password } = req.headers;
    try {
        console.log();
        
        const doctor = await doctorService.login(email, password);
        res.status(200).json(doctor);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

// Get all doctors
router.get('/get_all_doctor', async (req, res) => {
    try {
        // const doctors = await Doctor.find({ adminApprove: true });
        const doctors=await doctorService.getAllDoctors()
        res.status(200).json(doctors);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

// Get new doctors
router.get('/admin/get_new_doctor', async (req, res) => {
    try {
        const doctors = await doctorService.getNewDoctors()
        res.status(200).json(doctors);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

// Approve doctor
router.put('/admin/approved_doctor', async (req, res) => {
    try {
        const updatedDoctor = await doctorService.updateDoctor(req.body)
        if (!updatedDoctor) {
            throw new Error('Doctor not found');
        }
       
        res.status(200).json(updatedDoctor);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

module.exports = router;
