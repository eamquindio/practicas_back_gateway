const EnterprisesMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/empresas`;

EnterprisesMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

EnterprisesMSResource.get = nit => HTTPClient.get(`${BASE_URL}/company/find_by_nit`, { NIT: nit });

EnterprisesMSResource.registerEnterprise = (enterprise) => {
  const url = `${BASE_URL}/enterprise`;

  return HTTPClient.post(url, enterprise);
};
