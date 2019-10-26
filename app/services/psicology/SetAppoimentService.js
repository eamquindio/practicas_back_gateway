const SetAppoimentService = module.exports;
const PsicologyMSResource = require('../../resources/PsicologyMSResource');
const StudentMSResource = require('../../resources/StudentsMSResource');

SetAppoimentService.appoimentSet = (appoiment) => {

    const studentToValidate = await StudentMSResource.get(studentAnnoucement.id_estudiante);
    console.log(studentToValidate);

    if (!studentToValidate) throw ErrorHandler.BaseError('student not exists', 409);

    return PsicologyMSResource.appoimentSet(appoiment);
};
