const express = require('express');
const PracticesController = require('../app/controllers/PracticesController');
const ConvocatoryController = require('../app/controllers/ConvocatoryController');

const router = express.Router();

router.get('/students/practices', PracticesController.getStudentsWithPractice);
/* Convocatory Routes */
router.put('/convocatorias/:id(\\d+)', ConvocatoryController.modifyAnnouncement);

module.exports = router;
