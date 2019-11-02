const PracticeRequestController = module.exports;
const PracticeRequestService = require('../services/practiceRequest/PracticeRequestService');
const PracticeRequestServices = require('../services/practices/PracticeRequestServices');

PracticeRequestController.registerEnterpriseRequest = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await PracticeRequestService.registerEnterpriseRequest(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

PracticeRequestController.editStatus = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await PracticeRequestServices.editStatus(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
