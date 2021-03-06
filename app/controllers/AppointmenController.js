const AppointmenController = module.exports;
const AppointmenService = require('../services/psicology/AppointmenService');

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

AppointmenController.getAppointment = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    const result = await AppointmenService.getAppointment(id);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

AppointmenController.appoimentSet = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await AppointmenService.appoimentSet(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
