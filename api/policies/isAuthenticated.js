const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  console.log("Headers", req.headers);
  let bearerToken;
  let bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];
    if (bearer[0] !== "Bearer") {
      return res.status(401).json({ err: "Invalid Token" });
    }

    // verify token is ok
    jwt.verify(bearerToken, "secret key", (err, decoded) => {
      if (err) {
        sails.log("verification error: ", err.name);
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ err: "Invalid Token" });
        } else {
          return res.status(401).json({ err: "Invalid Token" });
        }
      }

      Users.findOne(decoded.id).exec(function callback(error, user) {
        if (error) {
          return res.serverError(error);
        }
        if (!user) {
          return res.serverError("User not found");
        }
        if (user.isDeleted) {
          return res.serverError("User deleted");
        }
        req.user = user;
        console.log(`
        ${req.method} ${req.originalUrl}
        ${user.email} [${user.role}]`);
        next();
      });
    });
  } else {
    return res.forbidden("No token provided");
  }
};
