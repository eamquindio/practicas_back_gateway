const RequestStudentController = module.exports;
const RequestStudentService = require('../services/request/RequestStudentService');

RequestStudentController.registerRequestStudent = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await RequestStudentService.registerRequestStudent(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
