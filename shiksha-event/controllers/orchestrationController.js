const routesConfig = require("../constants/routes");
const eventController = require("../controllers/event");
const orchestrationHandler = async (req, res, responses) => {
  console.log(
    req.targetPackages,
    req.inSequence,
    req.orchestrated,
    req.sourceRoute,
    responses
  );
  console.log(req.body);
  const selectedRouteConfig = routesConfig.routes.find(
    (obj) => obj.sourceRoute === req.sourceRoute
  );
  return await eventController[selectedRouteConfig.targetRoute.functionName](
    req,
    res,
    responses
  );
};

const orchestrationController = {
  orchestrationHandler,
};
module.exports = orchestrationController;
