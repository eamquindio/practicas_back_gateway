const PracticesController = module.exports;
const PracticesServices = require('../services/practices/PracticesServices');

PracticesController.getStudentsWithPractice = async (req, res, next) => {
  try {
    const result = await PracticesServices.getPracticesWithStudentInfo();

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

PracticesController.getTypePractice = async (req, res, next) => {
  try {
    const result = await PracticesServices.getTypePractice();

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};