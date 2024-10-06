const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { authenticateToken } = require('../services/authService');

router.post('/blogs', authenticateToken, blogController.createBlog);
router.get('/blogs', authenticateToken, blogController.getAllBlogs);
router.get('/blogs/:id', authenticateToken, blogController.getBlogById);
router.put('/blogs/:id', authenticateToken, blogController.updateBlog);
router.delete('/blogs/:id', authenticateToken, blogController.deleteBlog);

module.exports = router;
