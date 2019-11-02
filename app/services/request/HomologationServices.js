const HomologationServices = module.exports;
const HomologationMSResource = require('../../resources/HomologationMSResource');

HomologationServices.signUpHomologation = homologationAnnoucement =>
  HomologationMSResource.signUpHomologation(homologationAnnoucement);
