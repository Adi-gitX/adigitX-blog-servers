const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Register new user
const registerUser = async (userData) => {
  const { username, password } = userData;
  
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  return await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
    },
  });
};

// Authenticate user and generate token
const loginUser = async (userData) => {
  const { username, password } = userData;
  const user = await prisma.user.findUnique({ where: { username } });
  
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  // Generate a JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
  return { token, user };
};

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ message: 'Token is required' });

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    
    req.user = user; // Attach user to request
    next();
  });
};

module.exports = { registerUser, loginUser, authenticateToken };
