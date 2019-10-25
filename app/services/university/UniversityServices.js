const UniversityServices = module.exports;
const UniversityMSResource = require('../../resources/UniversityMSResource');

UniversityServices.getPrograms = async () => {
  const practices = UniversityMSResource.getPrograms();

  return practices;
};
