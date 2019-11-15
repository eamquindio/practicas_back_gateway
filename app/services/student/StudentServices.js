const StudentServices = module.exports;
const StudentsMSResource = require('../../resources/StudentsMSResource');

StudentServices.getStudents = async () => {
  const practices = StudentsMSResource.getStudents();

  return practices;
};
