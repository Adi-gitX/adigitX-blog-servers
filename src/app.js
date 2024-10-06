// app.js
const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes')

app.use(express.json()); // To parse JSON bodies
app.use('/api', blogRoutes);
app.use('/auth', authRoutes);
module.exports = app;
