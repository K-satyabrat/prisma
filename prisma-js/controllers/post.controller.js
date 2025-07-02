import prisma from "../DB/db.config.js";

export const createPost = async (req, res) => {
  const { userId, title, description } = req.body;

  try {
    const post = await prisma.post.create({
      data: { title, description, userId: Number(userId) },
    });
    return res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        comments: {
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return res
      .status(200)
      .json({ message: "Posts fetched successfully", posts });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//get post by id
export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({ where: { id: Number(id) } });
    return res.status(200).json({ message: "Post fetched successfully", post });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//update post
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: { title, description },
    });
    return res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//delete post
export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.delete({ where: { id: Number(id) } });
    return res.status(200).json({ message: "Post deleted successfully", post });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
