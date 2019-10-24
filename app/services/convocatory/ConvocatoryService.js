const ConvocatoryServices = module.exports;
const ConvocatoryMSResource = require('../../resources/ConvocatoryMSResource');

ConvocatoryServices.modifyAnnouncement = annoucement => ConvocatoryMSResource.modifyAnnouncement(annoucement);
