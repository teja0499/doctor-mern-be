const express = require('express');
const router = express.Router();
const consultationService = require('../services/consultationService');

router.post('/save-consultation', async (req, res) => {
  try {
    const consultation = await consultationService.saveConsultation(req.body);
    res.json(consultation);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

router.get('/doctor/consultation_history/:did', async (req, res) => {
  try {
    const consultations = await consultationService.findByDid(req.params.did);
    res.json(consultations);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

router.get('/doctor/consultation_req/:did', async (req, res) => {
  try {
    const consultations = await consultationService.findByDidAndDoctorViewFalse(req.params.did);
    res.json(consultations);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

router.put('/update-consultation', async (req, res) => {
  try {
    const consultation = await consultationService.updateConsultation(req.body);
    res.json(consultation);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

router.get('/get-consultation/:pid', async (req, res) => {
  try {
    const consultations = await consultationService.findByPid(req.params.pid);
    res.json(consultations);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});


router.get('/admin/get_all_prescription', async (req, res) => {
  try {
    const consultations = await consultationService.getAllConsultations();
    res.json(consultations);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});


router.get('/payment_check/:tid', async (req, res) => {
  try {
    const exists = await consultationService.existsByTransactionId(req.params.tid);
    res.json({ exists });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;
