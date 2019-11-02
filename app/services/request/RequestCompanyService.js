const RequestCompanyService = module.exports;
const PracticeRequestMSResource = require('../../resources/PracticeRequestMSResource');

RequestCompanyService.registerRequestCompany = requestCompany =>
  PracticeRequestMSResource.registerRequestCompany(requestCompany);
