const EvaluationService = module.exports;
const EvaluationMSResource = require('../../resources/EvaluationMSResource');

EvaluationService.registerEvaluation = evalution => EvaluationMSResource.registerEvaluation(evalution);
