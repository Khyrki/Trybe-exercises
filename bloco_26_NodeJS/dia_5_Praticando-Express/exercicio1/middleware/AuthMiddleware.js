const loginAuthMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /^[\w]+@[a-z]+.([a-z]{2,3}.?){1,2}$/g;
  const passwordRegex = /^\d{4,8}$/g

  const emailTest = emailRegex.test(email);
  const passwordTest = passwordRegex.test(password);

  if(!emailTest || !passwordTest) {
    return res.status(403).json({ code: 403, mesage: "Login ou senha inseridos com formato invalido" })
  }
  next();
};

module.exports = loginAuthMiddleware;
