const dotenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const bcrypt = require("bcryptjs");

dotenv.config();

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on localhost:${PORT} ...`);
});

app.get("/api/posts", async (req: any, res: any) => {
  try {
    const data = await prisma.post.findMany();
    console.log(data);

    res.status(201).send({ data });
  } catch (error: any) {
    console.log(`Error fetching posts: ${error.message}`);
    res.status(500).send({
      message: "Error fetching posts",
    });
  }
});

app.post("/api/createPost", express.json(), async (req: any, res: any) => {
  console.log(req.body);
  try {
    const { title, content } = await req.body;
    await prisma.post.create({
      data: {
        title,
        content,
      },
    });
  } catch (error: any) {
    console.log(`Error fetching posts: ${error.message}`);
    res.status(500).send({
      message: "Error fetching posts",
    });
  }
});
