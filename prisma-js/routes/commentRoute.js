import express from "express";
import {
  createComment,
  getAllComments,
  getCommentById,
  deleteComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", createComment);
router.get("/all", getAllComments);
router.get("/:id", getCommentById);
router.delete("/delete/:id", deleteComment);
export default router;
