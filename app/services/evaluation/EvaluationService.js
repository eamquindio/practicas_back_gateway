const EvaluationService = module.exports;
const EvaluationMSResource = require('../../resources/EvaluationMSResource');

EvaluationService.registerEvaluation = (evalution) => {

  return EvaluationMSResource.singUp(evalution);
}; 