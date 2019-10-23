const ConvocatoryServices = module.exports;
const ConvocatoryMSResource = require('../../resources/ConvocatoryMSResource');

ConvocatoryServices.modifyAnnouncement = annoucement => ConvocatoryMSResource.modifyAnnouncement(annoucement);

ConvocatoryServices.signUp = (studentAnnoucement) => {
    // implementar validacion de estudiante existente (no esta la funcionalidad en el student-ms)
    return ConvocatoryMSResource.singUp(studentAnnoucement);
};
