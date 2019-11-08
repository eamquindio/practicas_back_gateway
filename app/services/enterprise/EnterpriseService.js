const EnterpriseService = module.exports;
const EnterpriseMSResource = require('../../resources/EnterprisesMSResource');

EnterpriseService.registerEnterprise = (enterprise) => {
  return EnterpriseMSResource.registerEnterprise(enterprise);
}
