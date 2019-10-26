const EvaluationService = module.exports;
const EvaluationMSResource = require('../../resources/EvaluationMSResource');

EvaluationServices.registerEvaluation = (evalution) => {

    return EvaluationMSResource.registerEvaluation(evalution);
};