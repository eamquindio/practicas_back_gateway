const HomologationController = module.exports;
const HomologationServices = require('../services/request/HomologationServices');

HomologationController.signUpHomologation = async(req, res, next) => {
  const { body , params: { id } } = req;

  try {
      body.id_homologacion = id;
      const result = await HomologationServices.signUpHomologation(body);

      return res.send(result);
  } catch (error) {
      console.log({ error });

      return next(error);
  }
};
