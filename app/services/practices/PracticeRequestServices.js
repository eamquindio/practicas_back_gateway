const PracticeRequestServices = module.exports;
const PracticeRequestMSResource = require('../../resources/PracticeRequestMSResource');

PracticeRequestServices.editStatus = request =>
  PracticeRequestMSResource.editStatus(request);
