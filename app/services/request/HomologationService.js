const HomologationService = module.exports;
const HomologationMSResource = require('../../resources/HomologationMSResource');

HomologationService.register = homologaction => HomologationMSResource.register(homologaction);
