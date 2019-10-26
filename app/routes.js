const express = require('express');
const PracticesController = require('../app/controllers/PracticesController');
const ConvocatoryController = require('../app/controllers/ConvocatoryController');
const PracticeRequestController = require('../app/controllers/PracticeRequestController');
const HomologationController = require('../app/controllers/HomologationController');
const EvaliationController = require('../app/controllers/EvaluationController');
const RequestStudentController = require('../app/controllers/RequestStudentController');

const router = express.Router();

router.get('/students/practices', PracticesController.getStudentsWithPractice);
/* Convocatory Routes */
router.put('/convocatorias/:id(\\d+)', ConvocatoryController.modifyAnnouncement);
router.post('/convocatory/:id(\\d+)/signup', ConvocatoryController.signUp);

/* Homologación Routes */
router.post('/homologation/:id(\\d+)/signup', HomologationController.signUpHomologation);

/* Practice Request Routes */
router.post('/solicitudes/request_company', PracticeRequestController.registerEnterpriseRequest);

router.post('/evaluation/register', EvaliationController.registerEvaluation);

router.get('/Convocatorias/list' , ConvocatoryController.listAnnouncement);

/* Request Routes */
router.post('/solicitudes/request_student', RequestStudentController.registerRequestStudent);

module.exports = router;
