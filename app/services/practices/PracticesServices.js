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

<<<<<<< 8b5f02f9fc5eb8daff08693341434fd465c80629
PracticesServices.getTypePractice = async () => {
  const types = PracticesMSResource.getTypePractices();

  return types;
=======
PracticesServices.Registerpractices = (Practices) => {

  return PracticesMSResource.singUp(Practices);
>>>>>>> iniciar_practica_gatwey
};
