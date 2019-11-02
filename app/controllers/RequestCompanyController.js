const RequestCompanyController = module.exports;
const RequestCompanyService = require('../services/request/RequestCompanyService');

RequestCompanyController.registerCompanyRequest = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await RequestCompanyService.registerCompanyRequest(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
