import prisma from "../DB/db.config.js";

export const createComment = async (req, res) => {
  const { postId, userId, comment } = req.body;
  try {
    const createdComment = await prisma.comment.create({
      data: {
        postId: Number(postId),
        userId: Number(userId),
        comment,
      },
    });
    return res.status(201).json({
      message: "Comment created successfully",
      comment: createdComment,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//get all comments
export const getAllComments = async (req, res) => {
  try {
    const getAllComments = await prisma.comment.findMany({
      include: {
        post: {
          include: {
            user: true,
          },
        },
      },
    });
    return res
      .status(200)
      .json({ message: "Comments fetched successfully", getAllComments });
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
    const getCommentById = await prisma.comment.findUnique({
      where: { id: Number(id) },
    });
    return res
      .status(200)
      .json({ message: "Comment fetched successfully", getCommentById });
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
    const deleteComment = await prisma.comment.delete({
      where: { id: Number(id) },
    });
    const post = await prisma.post.findUnique({
      where: { id: deleteComment.postId },
    });
    await prisma.post.update({
      where: { id: post.id },
      data: { comment_count: post.comment_count - 1 },
    });
    return res
      .status(200)
      .json({ message: "Comment deleted successfully", deleteComment });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
