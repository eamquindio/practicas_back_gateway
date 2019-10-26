const express = require('express');
const PracticesController = require('../app/controllers/PracticesController');
const ConvocatoryController = require('../app/controllers/ConvocatoryController');
const HomologationController = require('../app/controllers/HomologationController');

const router = express.Router();

router.get('/students/practices', PracticesController.getStudentsWithPractice);
/* Convocatory Routes */
router.put('/convocatorias/:id(\\d+)', ConvocatoryController.modifyAnnouncement);
router.post('/convocatory/:id(\\d+)/signup', ConvocatoryController.signUp);

/* Homologación Routes */
router.post('/homologation/:id(\\d+)/signup', HomologationController.signUpHomologation);

module.exports = router;
