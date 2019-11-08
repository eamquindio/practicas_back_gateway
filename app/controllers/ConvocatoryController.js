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

ConvocatoryController.signUp = async (req, res, next) => {
  const { body, params: { id } } = req;
  try {
    body.id = id;
    const result = await ConvocatoryService.signUp(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

ConvocatoryController.listAnnouncement = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await ConvocatoryService.listAnnouncement(body);

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

ConvocatoryController.ClosingAnnouncement = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await ConvocatoryService.ClosingAnnouncement(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

ConvocatoryController.buildViewConvocatoryDetail = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    const result = await ConvocatoryService.buildViewConvocatoryDetail(id);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

ConvocatoryController.listAll = async (req, res, next) => {
  try {
    const result = await ConvocatoryService.listAll();

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
