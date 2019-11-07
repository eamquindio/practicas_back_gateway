const HomologationController = module.exports;
const HomologationService = require('../services/request/HomologationService');

HomologationController.register = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await HomologationService.register(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
