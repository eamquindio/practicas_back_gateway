const ConvocatoryServices = module.exports;
const ConvocatoryMSResource = require('../../resources/ConvocatoryMSResource');
const EnterprisesMSResource = require('../../resources/EnterprisesMSResource');
const UniversityMSResource = require('../../resources/UniversityMSResource');
const { ErrorHandler } = require('../../utils/ErrorHandlerMiddleware');

ConvocatoryServices.modifyAnnouncement = annoucement => ConvocatoryMSResource.modifyAnnouncement(annoucement);

ConvocatoryServices.signUp = async studentAnnoucement => ConvocatoryMSResource.signUp(studentAnnoucement);

ConvocatoryServices.listAnnouncement = listannoucement => ConvocatoryMSResource.listAnnouncement(listannoucement);

ConvocatoryServices.modifyAnnouncement =
  annoucement => ConvocatoryMSResource.modifyAnnouncement(annoucement);

ConvocatoryServices.registerAnnouncement = annoucement => ConvocatoryMSResource.registerAnnouncement(annoucement);

ConvocatoryServices.ClosingAnnouncement = ClosingAnnouncement =>
  ConvocatoryMSResource.ClosingAnnouncement(ClosingAnnouncement);

ConvocatoryServices.buildViewConvocatoryDetail = async (idAnnoucement) => {
  console.log(idAnnoucement);
  const annoucement = await ConvocatoryMSResource.get(idAnnoucement);
  console.log(annoucement);
  if (!annoucement) throw ErrorHandler.BaseError('convocatory not exists', 409);

  const enterpriseToValidate = await EnterprisesMSResource.get(annoucement.id_empresa);
  console.log(enterpriseToValidate);
  if (!enterpriseToValidate) throw ErrorHandler.BaseError('enterprise not exists', 409);

  [annoucement.id_empresa] = enterpriseToValidate;

  const facultyToValidate = await UniversityMSResource.getFaculty(annoucement.id_facultad);
  console.log(facultyToValidate);
  if (!facultyToValidate) throw ErrorHandler.BaseError('faculty not exists', 409);

  annoucement.id_facultad = facultyToValidate;

  const programToValidate = await UniversityMSResource.getProgram(annoucement.id_programa);
  console.log(programToValidate);
  if (!programToValidate) throw ErrorHandler.BaseError('program not exists', 409);

  annoucement.id_programa = programToValidate;

  return annoucement;
};