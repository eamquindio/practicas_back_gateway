const PracticeRequestMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/solicitudes/`;

PracticeRequestMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

PracticeRequestMSResource.registerCompanyRequest = (request) => {
  const url = `${BASE_URL}/request_company}`;

  return HTTPClient.post(url, request);
};