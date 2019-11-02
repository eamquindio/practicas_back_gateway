const RequestStudentService = module.exports;
const PracticeRequestMSResource = require('../../resources/PracticeRequestMSResource');

RequestStudentService.registerRequestStudent = requestStudent =>
  PracticeRequestMSResource.registerRequestStudent(requestStudent);

