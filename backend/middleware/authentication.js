const CustomError = require("../errors");
const { isTokenValid } = require("../Utils");

const authenticateUser = async (req, res, next) => {
  console.log(req);
  const token = req.signedCookies.authToken;

  if (!token)
    throw new CustomError.UnauthenticatedError("Authentication Invaild");

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };

    next();
  } catch (error) {
    console.log(error);
    throw new CustomError.UnauthenticatedError("Authentication Invaild");
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new CustomError.UnauthorizedError(
        "Unauthrized to access this route"
      );
    next();
  };
};

module.exports = { authenticateUser, authorizePermissions };
