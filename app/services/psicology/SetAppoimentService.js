const SetAppoimentService = module.exports;
const PsicologyMSResource = require('../../resources/PsicologyMSResource');

SetAppoimentService.appoimentSet = (appoiment) => {

    return PsicologyMSResource.appoimentSet(appoiment);
};
