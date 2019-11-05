const UniversityMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/universidad/`;

UniversityMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

UniversityMSResource.getPrograms = () => {
  const url = `${BASE_URL}/programs`;

  return HTTPClient.get(url);
};

UniversityMSResource.getProgram = id => HTTPClient.get(`${BASE_URL}/programs/${id}`);

UniversityMSResource.getFaculty = id => HTTPClient.get(`${BASE_URL}/faculty/${id}`);
