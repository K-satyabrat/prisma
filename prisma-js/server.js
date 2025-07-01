import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello, prisma with express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
