const ConvocatoryMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/convocatoria/`;

ConvocatoryMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

ConvocatoryMSResource.modifyAnnouncement =
announcement => HTTPClient.put(`${BASE_URL} /convocatorias/ `, announcement);

ConvocatoryMSResource.registerAnnouncement = (announcement) => {

  return HTTPClient.post(BASE_URL+"/convocatorias/", announcement);
};
