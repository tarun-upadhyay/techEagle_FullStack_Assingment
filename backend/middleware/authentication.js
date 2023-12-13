const CustomError = require("../errors");
const { isTokenValid } = require("../Utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token)
    throw new CustomError.UnauthenticatedError("Authentication Invaild");

  try {
    // const payload = isTokenValid({ token });
    // req.user = { name: payload.name, userId: payload._id, role: payload.role };

    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };

    next();
  } catch (error) {
    console.log(error);
    throw new CustomError.UnauthenticatedError("Authentication Invaild");
  }
};

//jaise hi authorizePermission main arrgument mill jata hai invoke jabhi ke jabhi kar deta when application starts
//so hamre paas refference rahta hai (req,res,next) jiske wash se callback ki maddad se hum invoke kar lete hain
const authorizePermissions = (...roles) => {
  //Whe authorizePermissions is taking arrgument suppose our application getting big having different role so make
  //general approach to getting whom want every user detail like this.
  //we can specify that particular role you can access this route freely.

  //If we want more dynamic and which user role can access certain route, what user is allowed.
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new CustomError.UnauthorizedError(
        "Unauthrized to acces this route"
      );
    next();
  };
};

module.exports = { authenticateUser, authorizePermissions };
