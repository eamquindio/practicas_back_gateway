const UniversityController = module.exports;
const UniversityServices = require('../services/university/UniversityServices');

UniversityController.getPrograms = async (req, res, next) => {
  try {
    const result = await UniversityServices.getPrograms();

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};