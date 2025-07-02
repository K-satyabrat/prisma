import { Router } from "express";
import userRoute from "./userRoute.js";
import postRoute from "./postRoute.js";
import commentRoute from "./commentRoute.js";

const router = Router();

router.use("/user", userRoute);
router.use("/post", postRoute);
router.use("/comment", commentRoute);
export default router;
