const ConvocatoryController = module.exports;
const ConvocatoryService = require('../services/convocatory/ConvocatoryService');

ConvocatoryController.modifyAnnouncement = async (req, res, next) => {
  const { body, params: { id } } = req;
  try {
    body.id = id;
    const result = await ConvocatoryService.modifyAnnouncement(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
