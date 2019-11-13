const RequestMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/solicitudes`;

RequestMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

RequestMSResource.getRequest = () => {
  const url = `${BASE_URL}/request`;

  return HTTPClient.get(url);
};
