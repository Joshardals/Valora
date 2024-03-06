const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();

dotenv.config(); 
let jwtSecretKey = process.env.JWT_SECRET_KEY; 
let tokenHeaderKey = process.env.TOKEN_HEADER_KEY; 

let PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server is up and running on localhost:${PORT} ...`)
})




