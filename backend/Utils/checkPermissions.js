const CustomError = require("../errors");

const checkPermissions = (requestUser, resourceId, dontreview) => {
  console.log(requestUser, resourceId);
  if (requestUser.role === "manager") return;
  if ((requestUser.userId === resourceId.toString(), dontreview)) {
    throw new CustomError.UnauthorizedError(
      "Not authorized to check others id via this route"
    );
  }

  if (requestUser.userId === resourceId.toString()) return;
  throw new CustomError.UnauthorizedError(
    "Not authorized to check others id via this route"
  );
};
module.exports = checkPermissions;
