const HomologationServices = module.exports;
const HomologationMSResource = require('../../resources/HomologationMSResource');

HomologationServices.signUpHomologation = (homologationAnnoucement) => {
  return HomologationMSResource.signUpHomologation(homologationAnnoucement);
};
