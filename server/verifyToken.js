import jwt from "jsonwebtoken";

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    //takes the token after "Bearer_"
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid.");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You re not authorized");
  }
}

export default verify;

// at line 6 we are splitting the data Bearer and the token.
// and verifying it
