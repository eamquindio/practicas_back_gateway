const StudentController = module.exports;
const StudentServices = require('../services/student/StudentServices');

StudentController.getStudents = async (req, res, next) => {
  try {
    const result = await StudentServices.getStudents();

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
