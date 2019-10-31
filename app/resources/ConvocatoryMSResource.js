const ConvocatoryMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/convocatoria/`;

ConvocatoryMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

ConvocatoryMSResource.modifyAnnouncement =
announcement => HTTPClient.put(`${BASE_URL} /convocatorias/ `, announcement);


ConvocatoryMSResource.listAnnouncement =
listannouncement => HTTPClient.get(`${BASE_URL} /convocatorias/ `, listannouncement);

ConvocatoryMSResource.signUp =
(signUpAnnoucement) => {
  return HTTPClient.post(`${BASE_URL}/convocatorias/inscibirse/`, signUpAnnoucement);
};

ConvocatoryMSResource.singUp =
signUpAnnoucement => HTTPClient.post(`${BASE_URL}"/convocatorias/inscibirse/"`, signUpAnnoucement);
ConvocatoryMSResource.listAnnouncement =
listannouncement => HTTPClient.get(`${BASE_URL} /convocatorias/ `, listannouncement);

ConvocatoryMSResource.singUp =
signUpAnnoucement => HTTPClient.post(`${BASE_URL}/convocatorias/inscibirse/`, signUpAnnoucement);

ConvocatoryMSResource.modifyAnnouncement =
announcement => HTTPClient.put(`${BASE_URL} /convocatorias/ `, announcement);

ConvocatoryMSResource.ClosingAnnouncement = ClosingAnnouncement => HTTPClient.get(`${BASE_URL} /convocatorias/ `,ClosingAnnouncement);

ConvocatoryMSResource.ClosingAnnouncement = ClosingAnnouncement => HTTPClient.get(`${BASE_URL} /convocatorias/ `,ClosingAnnouncement);
