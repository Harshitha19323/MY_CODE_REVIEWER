import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import reviewRoutes from "./routes/review.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/review", reviewRoutes);

const PORT = 7915;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

