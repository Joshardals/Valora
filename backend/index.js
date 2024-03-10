

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
  console.log(`Server is up and running on localhost:${PORT} ...`)
})

async function main() {


  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  
}
main(); 