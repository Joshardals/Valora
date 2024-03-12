const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors());

// Creating a function to hash password using bcrypt
async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

interface userType {
  id: number;
  name: string;
}

app.get("/api/v1/users", async (req: any, res: any) => {
  const users: userType[] = [
    { id: 1, name: "Joshua" },
    { id: 2, name: "Ruth" },
  ];
  res.status(200).json({ users });
});

app.post("/api/v1/register", express.json(), async (req: any, res: any) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error: any) {
    console.log(`Error creating user: ${error.message}`);
    res.status(500).json({ message: "Error creating user" });
  }
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on localhost:${PORT} ...`);
});
