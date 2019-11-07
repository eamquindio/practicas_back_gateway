const ConvocatoryMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/convocatoria`;

ConvocatoryMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

ConvocatoryMSResource.modifyAnnouncement = announcement =>
  HTTPClient.put(`${BASE_URL}/convocatorias/`, announcement);

ConvocatoryMSResource.listAnnouncement = listannouncement =>
  HTTPClient.get(`${BASE_URL}/Convocatorias/list`, listannouncement);

ConvocatoryMSResource.signUp = signUpAnnoucement =>
  HTTPClient.post(`${BASE_URL}/convocatorias/inscibirse/`, signUpAnnoucement);

ConvocatoryMSResource.registerAnnouncement = announcement =>
  HTTPClient.post(`${BASE_URL}/convocatorias/`, announcement);

ConvocatoryMSResource.ClosingAnnouncement = ClosingAnnouncement =>
  HTTPClient.get(`${BASE_URL}/convocatorias/`, ClosingAnnouncement);

ConvocatoryMSResource.get = id =>
  HTTPClient.get(`${BASE_URL}/convocatorias/${id}`);

ConvocatoryMSResource.listAll = () => {
  const url = `${BASE_URL}/convocatorias`;

  return HTTPClient.get(url);
};
