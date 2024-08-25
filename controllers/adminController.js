const express = require('express');
const router = express.Router();
const adminService = require('../services/adminService');


router.post('/admin/login', async (req, res) => {
  const { email, password } = req.headers;

  try {
    const admin = await adminService.login(email, password);
    res.json(admin);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

router.post('/admin/sign_up', async (req, res) => {
  const newAdmin = req.body;

  try {
    const savedAdmin = await adminService.signUp(newAdmin);
    res.status(201).json(savedAdmin);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;
