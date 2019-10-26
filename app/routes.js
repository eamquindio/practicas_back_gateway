const express = require('express');
const PracticesController = require('../app/controllers/PracticesController');
const ConvocatoryController = require('../app/controllers/ConvocatoryController');
const SetAppoimentController = require('./controllers/SetAppoimentController');

const router = express.Router();

router.get('/students/practices', PracticesController.getStudentsWithPractice);
/* Convocatory Routes */
router.put('/convocatorias/:id(\\d+)', ConvocatoryController.modifyAnnouncement);
router.post('/convocatory/:id(\\d+)/signup', ConvocatoryController.signUp);
/* Set Appoiment Routes */
router.post('/psicologia/setAppointment', SetAppoimentController.appoimentSet);

module.exports = router;
