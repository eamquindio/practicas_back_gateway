const EnterprisesController = module.exports;
const EnterpriseService = require('../services/enterprise/EnterpriseService');

EnterprisesController.registerEnterprise = async (req, res, next) => {
  const { body } = req;
  try {
    
    const result = await EnterpriseService.registerEnterprise(body);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

EnterprisesController.getEnterprise = async (req, res, next) => {
  const { params: { NIT } } = req;
  try {
    const result = await EnterpriseService.getEnterprise(NIT);

    return res.send(result);
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};
