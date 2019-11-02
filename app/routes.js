const express = require('express');
const PracticesController = require('../app/controllers/PracticesController');
const ConvocatoryController = require('../app/controllers/ConvocatoryController');
const RequestCompanyController = require('../app/controllers/RequestCompanyController');

const router = express.Router();

router.get('/students/practices', PracticesController.getStudentsWithPractice);
/* Convocatory Routes */
router.put('/convocatorias/:id(\\d+)', ConvocatoryController.modifyAnnouncement);

/* Practice Request Routes */
router.post('/solicitudes/request_company', RequestCompanyController.registerCompanyRequest);

module.exports = router;
