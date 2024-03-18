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

const generateToken = (user: { id: number }) => {
  const payload = {
    userId: user.id, // Include other relevant user data if needed
  };

  const options = {
    expiresIn: "30m", // Set token expiry time (e.g., 30 minutes)
    secret: process.env.JWT_SECRET,
  };

  return jwt.sign(payload, options);
};

// A post request for the register an account page.
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

// A post request for login
app.post("/api/v1/login", express.json(), async (req: any, res: any) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    const token = generateToken(user);
    res.status(200).json({ message: "Login successful", token });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on localhost:${PORT} ...`);
});
