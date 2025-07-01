import express from "express";
import { createUser } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.post("/create", createUser);

export default router;