const express = require('express');
const PracticesController = require('../app/controllers/PracticesController');

const router = express.Router();

router.get('/students/practices', PracticesController.getStudentsWithPractice);

module.exports = router;
