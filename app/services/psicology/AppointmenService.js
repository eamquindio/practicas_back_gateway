const AppointmenServices = module.exports;
const PsicologyMSResource = require('../../resources/PsicologyMSResource');

AppointmenServices.modifyAppointmen =
appointmen => PsicologyMSResource.modifyAppointmen(appointmen);
