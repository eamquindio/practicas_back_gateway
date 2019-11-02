const HomologationMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/solicitudes/`;

HomologationMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

HomologationMSResource.signUpHomologation = signUpAnnoucement =>
  HTTPClient.post(`${BASE_URL}/homologation`, signUpAnnoucement);
