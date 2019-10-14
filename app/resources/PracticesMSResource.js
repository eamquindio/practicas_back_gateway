const PracticesMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/practica`;

PracticesMSResource.getPractices = () => {
  const url = `${BASE_URL}/practica_estudiante`;

  return HTTPClient.get(url);
};
