const express = require('express');
const router = express.Router();
const {
    tambahMotor,
    ambilSemuaMotor,
    ambilMotorById,
    updateMotor,
    hapusMotor
} = require('../controllers/motorController');

router.route('/')
    .post(tambahMotor)
    .get(ambilSemuaMotor);

router.route('/:id')
    .get(ambilMotorById)
    .put(updateMotor)
    .delete(hapusMotor);

module.exports = router;
