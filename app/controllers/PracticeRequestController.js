const PracticeRequestController = module.exports;
const PracticeRequestService = require('../services/practiceRequest/PracticeRequestService');

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
