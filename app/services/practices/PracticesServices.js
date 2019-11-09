const PracticesServices = module.exports;
const PracticesMSResource = require('../../resources/PracticesMSResource');
const StudentsMSResource = require('../../resources/StudentsMSResource');

PracticesServices.getPracticesWithStudentInfo = async () => {
  const practices = await PracticesMSResource.getPractices();
  console.log(`Practices: ${JSON.stringify(practices)}`);

  const studentsId = practices.map(practice => practice.estudiante_id);

  const students = await StudentsMSResource.getStudentsByIdList(studentsId);
  console.log(`Students: ${JSON.stringify(students)}`);

  return practices.map((practice) => {
    const studentFound = students.find(student => +student.id === +practice.estudiante_id);

    return {
      student: studentFound,
      practice,
    };
  });
};



    
PracticesServices.Registerpractices = (Practice) => {

  return PracticesMSResource.postPractices(Practice);
};      

PracticesServices.getTypePractice = async () => {
  const types = PracticesMSResource.getTypePractices();

  return types;
};
