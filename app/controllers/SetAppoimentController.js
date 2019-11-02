const SetAppoimentController = module.exports;
const SetAppoimentService = require('../services/psicology/SetAppoimentService');

SetAppoimentController.appoimentSet = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await SetAppoimentService.appoimentSet(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
