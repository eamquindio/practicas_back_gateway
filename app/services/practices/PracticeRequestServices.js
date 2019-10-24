const PracticeRequestServices = module.exports;
const PracticeRequestMSResource = require('../../resources/PracticeRequestMSResource');

PracticeRequestServices.modifyRequestStatus = practice =>
  PracticeRequestMSResource.modifyRequestStatus(practice);
