import "dotenv/config";
import express from "express";
import cors from "cors";
import URLController from "./Controllers/URLController";

const api = express();
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use(
  cors({
    origin: process.env["APP_URL"],
  })
);

const urlController = new URLController();

api.post("/shorten", urlController.shorten);

api.listen(3000, () => {
  console.log("Server running on port 3000");
});
