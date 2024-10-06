const AuthService = require('../services/authService');

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await AuthService.registerUser({ username, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const { token, user } = await AuthService.loginUser({ username, password });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };
