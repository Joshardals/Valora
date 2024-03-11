const dotenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const bcrypt = require("bcryptjs");

// Creating a function to hash password using bcrypt
async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

app.post("/api/register", express.json(), async (req: any, res: any) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    
    const user = await prisma.user.create({
        data: {
            
        }
    })
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
