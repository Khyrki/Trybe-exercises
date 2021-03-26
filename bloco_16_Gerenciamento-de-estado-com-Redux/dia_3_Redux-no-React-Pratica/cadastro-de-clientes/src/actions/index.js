const login = (user, password) => ({
  type: "LOGIN",
  user,
  password,
});

export default login;
