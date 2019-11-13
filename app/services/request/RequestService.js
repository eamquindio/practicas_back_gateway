const RequestService = module.exports;
const RequestMSResource = require('../../resources/RequestMSResource');

RequestService.getRequest = async () => {
  const practices = RequestMSResource.getRequest();

  return practices;
};
