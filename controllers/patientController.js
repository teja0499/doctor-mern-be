const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const patientService = require('../services/patientService');
const upload = multer({ dest: 'uploads/' });

// Sign-up endpoint
router.post('/patient/sign_up', upload.single('file'), async (req, res) => {
    try {
        console.log("patient sign up");
        const patientData = JSON.parse(req.body.data);

        if (req.file) {
            patientData.profilePicture = req.file.path;
        }

        const savedPatient = await patientService.signUp(patientData);
        res.status(200).json(savedPatient);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

// Login endpoint
router.post('/patient/login', async (req, res) => {
    try {
        console.log("patient login");
        const { email, password } = req.headers;
        const patient = await patientService.login(email, password);
        res.status(200).json(patient);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

// Get all users endpoint
router.get('/admin/get_users', async (req, res) => {
    try {
        console.log("get all users");
        const patients = await patientService.getAllUsers();
        res.status(200).json(patients);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

module.exports = router;
