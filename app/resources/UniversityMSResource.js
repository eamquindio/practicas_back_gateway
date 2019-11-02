const UniversityMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/convocatoria/`;

UniversityMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

UniversityMSResource.getPrograms = () => {
  const url = `${BASE_URL}/programs`;

  return HTTPClient.get(url);
};