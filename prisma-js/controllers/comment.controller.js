import prisma from "../DB/db.config.js";

export const createComment = async (req, res) => {
  const { postId, userId, comment } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: {
        postId: Number(postId),
        userId: Number(userId),
        comment,
      },
    });
    return res
      .status(201)
      .json({ message: "Comment created successfully", comment });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//get all comments
export const getAllComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany();
    return res
      .status(200)
      .json({ message: "Comments fetched successfully", comments });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//get comment by id
export const getCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: Number(id) },
    });
    return res
      .status(200)
      .json({ message: "Comment fetched successfully", comment });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//delete comment
export const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await prisma.comment.delete({ where: { id: Number(id) } });
    return res
      .status(200)
      .json({ message: "Comment deleted successfully", comment });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
