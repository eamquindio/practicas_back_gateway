const EvaluationMSResource = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/evaluacion/`;

EvaluationMSResource.init = () => {
  console.log({ BASE_URL, HTTPClient });
};

EvaluationMSResource.registerEvaluation = evala => HTTPClient.post(`${BASE_URL}/evaluation/`, evala);
