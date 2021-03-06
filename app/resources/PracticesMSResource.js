const PracticesMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/practica`;

PracticesMSResource.getPractices = () => {
  const url = `${BASE_URL}/practica_estudiante`;

  return HTTPClient.get(url);
};

PracticesMSResource.getTypePractices = () => {
  const url = `${BASE_URL}/practiceType/all`;

  return HTTPClient.get(url);
};

PracticesMSResource.postPractices = (practice) => {
  HTTPClient.post(`${BASE_URL}/practica_estudiante`, practice);
};

