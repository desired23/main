import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/index.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);


// app.use("/api", router);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

export const viteNodeApp = app;