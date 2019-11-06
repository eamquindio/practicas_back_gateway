const PsicologyMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/psicologia`;

PsicologyMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

PsicologyMSResource.appoimentSet = appoiment => HTTPClient.post(`${BASE_URL}/appointment/`, appoiment);

PsicologyMSResource.modifyAppointment = appointment => HTTPClient.put(`${BASE_URL}/appointment/`, appointment);
PsicologyMSResource.getAppointment = id => HTTPClient.get(`${BASE_URL}/appointment/${id}`);
