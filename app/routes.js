const express = require('express');
const PracticesController = require('../app/controllers/PracticesController');
const ConvocatoryController = require('../app/controllers/ConvocatoryController');
const PracticeRequestController = require('../app/controllers/PracticeRequestController');
const HomologationController = require('../app/controllers/HomologationController');
const EvaluationController = require('../app/controllers/EvaluationController');
const RequestStudentController = require('../app/controllers/RequestStudentController');
const AppointmenController = require('../app/controllers/AppointmenController');
const EnterprisesController = require('../app/controllers/EnterprisesController');
const UniversityController = require('../app/controllers/UniversityController');

cerrarconvocatoria

const router = express.Router();

router.get('/students/practices', PracticesController.getStudentsWithPractice);
/* Convocatory Routes */
router.put('/convocatorias/:id(\\d+)', ConvocatoryController.modifyAnnouncement);
router.get('/convocatorias/:id(\\d+)', ConvocatoryController.buildViewConvocatoryDetail);
router.post('/convocatorias/:id(\\d+)/signup', ConvocatoryController.signUp);
router.post('/closingReason', ConvocatoryController.ClosingAnnouncement);
/* Set Appoiment Routes */
router.post('/psicologia/appointment/', AppointmenController.appoimentSet);

/* Homologación Routes */
router.post('/homologation', HomologationController.register);

/* Practice Request Routes */
router.post('/solicitudes/request_company', PracticeRequestController.registerEnterpriseRequest);
router.put('/solicitud/:id(\\d+)', PracticeRequestController.editStatus);

router.post('/evaluation', EvaluationController.registerEvaluation);

router.get('/Convocatorias/list', ConvocatoryController.listAnnouncement);
router.get('/convocatorias', ConvocatoryController.listAll);

/* Request Routes */
router.post('/solicitudes/request_student', RequestStudentController.registerRequestStudent);

/* Psicology Routes */
router.put('/appointment/', AppointmenController.modifyAppointmen);
router.get('/appointment/:id(\\d+)', AppointmenController.getAppointment);

/* Cerrar convocatoria */
router.get('/programs', UniversityController.getPrograms);
// router.put('/Convocatorias/cerrar/:id(\\d+)', AnnouncementController.editStatus);


router.put('/request_company/:id(\\d+)', PracticeRequestController.editStatus);
router.put('/request_student/:id(\\d+)', PracticeRequestController.editStatus);
router.post('/practices/start_practices', PracticesController.registerPractices);
router.post('/convocatorias', ConvocatoryController.registerAnnouncement);
router.post('/convocatorias', ConvocatoryController.registerAnnouncement);

module.exports = router;