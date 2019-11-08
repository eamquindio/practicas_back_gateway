const AppointmenServices = module.exports;
const PsicologyMSResource = require('../../resources/PsicologyMSResource');
const StudentMSResource = require('../../resources/StudentsMSResource');
const { ErrorHandler } = require('../../utils/ErrorHandlerMiddleware');

AppointmenServices.modifyAppointmen = appointmen => PsicologyMSResource.modifyAppointmen(appointmen);

AppointmenServices.appoimentSet = async (appoiment) => {
  const studentToValidate = await StudentMSResource.get(appoiment.estudianteId);
  console.log(studentToValidate);

  if (!studentToValidate) throw ErrorHandler.BaseError('student not exists', 409);

  return PsicologyMSResource.appoimentSet(appoiment);
};

AppointmenServices.getAppointment = await (id) => {
  const appointmen = PsicologyMSResource.getAppointment(id);

  return appointmen;
};
