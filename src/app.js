// app.js
const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json()); // To parse JSON bodies
app.use('/api', blogRoutes);

module.exports = app;
