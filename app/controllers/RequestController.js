const RequestController = module.exports;
const RequestService = require('../services/request/RequestService');

RequestController.getRequest = async (req, res, next) => {
  try {
    const result = await RequestService.getRequest();

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
