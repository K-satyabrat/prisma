import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/all", getAllPosts);
router.get("/:id", getPostById);
router.delete("/delete/:id", deletePost);
router.put("/update/:id", updatePost);

export default router;
