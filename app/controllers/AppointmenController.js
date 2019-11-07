const AppointmenController = module.exports;
const AppointmenService = require('../services/psicology/AppointmenService');
const SetAppoimentService = require('../services/psicology/SetAppoimentService');

AppointmenController.modifyAppointmen = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await AppointmenService.modifyAppointmen(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

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