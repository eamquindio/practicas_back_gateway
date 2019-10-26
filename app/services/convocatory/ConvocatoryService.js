const ConvocatoryServices = module.exports;
const ConvocatoryMSResource = require('../../resources/ConvocatoryMSResource');

ConvocatoryServices.modifyAnnouncement =
annoucement => ConvocatoryMSResource.modifyAnnouncement(annoucement);

ConvocatoryServices.registerAnnouncement = (annoucement) => {

    return ConvocatoryMSResource.registerAnnouncement(annoucement);
};
