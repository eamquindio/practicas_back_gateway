const EnterpriseService = module.exports;
const EnterpriseMSResource = require('../../resources/EnterprisesMSResource');

EnterpriseService.registerEnterprise = (enterprise) => {
  return EnterpriseMSResource.registerEnterprise(enterprise);
}

EnterpriseService.getEnterprise = async (NIT) => {
  const enterprise = EnterpriseMSResource.getEnterprise(NIT);

  return enterprise;
};