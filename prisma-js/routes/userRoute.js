import express from "express";
import {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
} from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/all", getAllUsers);
router.get("/:id", getUserById);
router.delete("/delete/:id", deleteUser);
export default router;
