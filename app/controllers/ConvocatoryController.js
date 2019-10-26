const ConvocatoryController = module.exports;
const ConvocatoryService = require('../services/convocatory/ConvocatoryService');

ConvocatoryController.modifyAnnouncement = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await ConvocatoryService.modifyAnnouncement(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

ConvocatoryController.registerAnnouncement = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await ConvocatoryService.registerAnnouncement(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
