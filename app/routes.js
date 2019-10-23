const express = require('express');
const PracticesController = require('../app/controllers/PracticesController');
const EvaliationController = require('../app/controllers/EvaliationController');

const router = express.Router();

router.get('/students/practices', PracticesController.getStudentsWithPractice);

router.post('/evaluation/regiterController', EvaliationController.registerEvaluation);

module.exports = router;
