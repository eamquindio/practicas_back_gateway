const EvaluationController = module.exports;
const EvaluationService = require('../services/evaluation/EvaluationService');

EvaluationController.registerEvaluation = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await EvaluationService.registerEvaluation(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};