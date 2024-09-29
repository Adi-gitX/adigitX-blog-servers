// blogService.js
const BlogModel = require('../models/blogModel');

const createBlog = async (blogData) => {
  // You can add extra validation or processing here
  if (!blogData.title || !blogData.content) {
    throw new Error('Title and content are required');
  }
  
  return await BlogModel.createBlog(blogData);
};

const getAllBlogs = async () => {
  return await BlogModel.getAllBlogs();
};

const getBlogById = async (id) => {
  const blog = await BlogModel.getBlogById(id);
  if (!blog) {
    throw new Error('Blog not found');
  }
  return blog;
};

const updateBlog = async (id, blogData) => {
  const blog = await BlogModel.getBlogById(id);
  if (!blog) {
    throw new Error('Blog not found');
  }
  
  return await BlogModel.updateBlog(id, blogData);
};

const deleteBlog = async (id) => {
  const blog = await BlogModel.getBlogById(id);
  if (!blog) {
    throw new Error('Blog not found');
  }
  
  return await BlogModel.deleteBlog(id);
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
