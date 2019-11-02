const ConvocatoryServices = module.exports;
const ConvocatoryMSResource = require('../../resources/ConvocatoryMSResource');
const StudentMSResource = require('../../resources/StudentsMSResource');
const { ErrorHandler } = require('../../utils/ErrorHandlerMiddleware');

ConvocatoryServices.modifyAnnouncement = annoucement => ConvocatoryMSResource.modifyAnnouncement(annoucement);

ConvocatoryServices.signUp = async (studentAnnoucement) => {
  const studentToValidate = await StudentMSResource.get(studentAnnoucement.id_estudiante);
  console.log(studentToValidate);
  if (!studentToValidate) throw ErrorHandler.BaseError('student not exists', 409);

  return ConvocatoryMSResource.signUp(studentAnnoucement);
};

ConvocatoryServices.listAnnouncement = listannoucement => ConvocatoryMSResource.listAnnouncement(listannoucement);


ConvocatoryServices.modifyAnnouncement =
annoucement => ConvocatoryMSResource.modifyAnnouncement(annoucement);

ConvocatoryServices.registerAnnouncement = annoucement => ConvocatoryMSResource.registerAnnouncement(annoucement);
ConvocatoryServices.ClosingAnnouncement = ClosingAnnouncement =>
  ConvocatoryMSResource.ClosingAnnouncement(ClosingAnnouncement);
