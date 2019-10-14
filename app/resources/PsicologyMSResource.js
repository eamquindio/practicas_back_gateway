const PsicologyMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/psicologia/`;

PsicologyMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};
