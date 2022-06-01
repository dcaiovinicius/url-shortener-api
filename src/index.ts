import "dotenv/config";
import express from "express";
import cors from "cors";
import URLController from "./Controllers/URLController";
import MogooseConnect from "./database";

const database = new MogooseConnect();
database.connect();

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
api.get("/:hash", urlController.redireact);

api.listen(3000, () => {
  console.log("Server running on port 3000");
});
