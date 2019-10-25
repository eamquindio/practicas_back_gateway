const PracticeRequestServices = module.exports;
const PracticeRequestMSResource = require('../../resources/PracticeRequestMSResource');

PracticeRequestServices.registerEnterpriseRequest = request =>
  PracticeRequestMSResource.registerEnterpriseRequest(request);
