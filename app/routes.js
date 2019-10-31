const express = require('express');
const PracticesController = require('../app/controllers/PracticesController');
const ConvocatoryController = require('../app/controllers/ConvocatoryController');
const PracticeRequestController = require('../app/controllers/PracticeRequestController');
const HomologationController = require('../app/controllers/HomologationController');
const EvaluationController = require('../app/controllers/EvaluationController');
const RequestStudentController = require('../app/controllers/RequestStudentController');

const SetAppoimentController = require('./controllers/SetAppoimentController');

const AppointmenController = require('../app/controllers/AppointmenController');

const router = express.Router();

router.get('/students/practices', PracticesController.getStudentsWithPractice);
/* Convocatory Routes */
router.put('/convocatorias/:id(\\d+)', ConvocatoryController.modifyAnnouncement);
router.post('/convocatory/:id(\\d+)/signup', ConvocatoryController.signUp);
/* Set Appoiment Routes */
router.post('/psicologia/appointment', SetAppoimentController.appoimentSet);

/* Homologación Routes */
router.post('/homologation/:id(\\d+)/signup', HomologationController.signUpHomologation);

/* Practice Request Routes */
router.post('/solicitudes/request_company', PracticeRequestController.registerEnterpriseRequest);
router.put('/solicitud/:id(\\d+)', PracticeRequestController.editStatus);

router.post('/evaluation/register', EvaluationController.registerEvaluation);

router.get('/Convocatorias/list', ConvocatoryController.listAnnouncement);


/* Request Routes */
router.post('/solicitudes/request_student', RequestStudentController.registerRequestStudent);

/* Psicology Routes */
router.put('/appointment', AppointmenController.modifyAppointmen);
/*Cerrar convocatoria */
router.put('/Convocatorias/cerrar/:id(\\d+)' , AnnouncementController.editStatus);



router.put('/request_company/:id(\\d+)', PracticeRequestController.editStatus);
router.put('/request_student/:id(\\d+)', PracticeRequestController.editStatus);

router.post('/practices/start_practices',PracticesController.registerPractices)


module.exports = router;
