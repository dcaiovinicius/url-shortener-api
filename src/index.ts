import express from "express";

const api = express();

api.get("/url", (request, response) => {
  response.send({ data: new Date() });
});

api.listen(3000, () => {
  console.log("Server running on port 3000");
});
