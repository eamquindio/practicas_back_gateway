const HomologationMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');

// eslint-disable-next-line no-template-curly-in-string
const BASE_URL = '${MICROSERVICE_URL}/api/solicitudes/';

HomologationMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

HomologationMSResource.signUpHomologation = (signUpAnnoucement) => {
  return HTTPClient.post(`${BASE_URL}/homologation`, signUpAnnoucement);
};
