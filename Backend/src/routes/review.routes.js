import express from "express";
import { reviewCode } from "../controllers/review.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Review route working 🚀");
});

router.post("/", reviewCode);

export default router;