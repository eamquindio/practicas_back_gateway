const StudentsMSResources = module.exports;
const HTTPClient = require('../utils/HTTPClient');
const { MICROSERVICE_URL } = require('../configs/microservices');

const BASE_URL = `${MICROSERVICE_URL}/api/estudiantes`;

StudentsMSResources.getStudentsByIdList = (studentIdList) => {
  const url = `${BASE_URL}/students/by_ids`;

  return HTTPClient.post(url, { estudiante: studentIdList });
};

StudentsMSResources.get = (id) => HTTPClient.get(`${BASE_URL}/students/`, { id });
