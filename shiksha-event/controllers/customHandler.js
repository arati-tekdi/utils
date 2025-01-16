const routesConfig = require("../constants/routes");
const eventController = require("./event");

const customHandler = async (req, res) => {
  const selectedRouteConfig = routesConfig.routes.find(
    (obj) => obj.sourceRoute === req.sourceRoute
  );
  return await eventController[selectedRouteConfig.targetRoute.functionName](
    req,
    res,
    selectedRouteConfig
  );
};

const customHandlerController = {
  customHandler,
};
module.exports = customHandlerController;
