const dotenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const bcrypt = require("bcryptjs");

dotenv.config();

app.post("/api/register", express.json(), async (req: any, res: any) => {
  try {
    const { firstName, lastName, email, password } = await req.body;
    // await prisma.post.create({
    //   data: {
    //     title,
    //     content,
    //   },
    // });
  } catch (error: any) {}
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on localhost:${PORT} ...`);
});
