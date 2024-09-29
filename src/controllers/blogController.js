// blogController.js
const BlogService = require('../services/blogService');

const createBlog = async (req, res) => {
  const { title, content, image } = req.body;
  
  try {
    const blog = await BlogService.createBlog({ title, content, image });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogService.getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving blogs', error });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const blog = await BlogService.getBlogById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, image } = req.body;
  
  try {
    const updatedBlog = await BlogService.updateBlog(id, { title, content, image });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  
  try {
    await BlogService.deleteBlog(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
