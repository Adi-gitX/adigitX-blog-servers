// blogModel.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createBlog = async (data) => {
  return await prisma.blog.create({ data });
};

const getAllBlogs = async () => {
  return await prisma.blog.findMany();
};

const getBlogById = async (id) => {
  return await prisma.blog.findUnique({ where: { id: parseInt(id) } });
};

const updateBlog = async (id, data) => {
  return await prisma.blog.update({
    where: { id: parseInt(id) },
    data,
  });
};

const deleteBlog = async (id) => {
  return await prisma.blog.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
