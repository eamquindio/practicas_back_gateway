const EnterpriseService = module.exports;
const EnterpriseMSResource = require('../../resources/EnterprisesMSResource');

EnterpriseService.registerEnterprise = enterprise => EnterpriseMSResource.registerEnterprise(enterprise);

EnterpriseService.getEnterprise = async (NIT) => {
  const enterprise = EnterpriseMSResource.get(NIT);

  return enterprise;
};
