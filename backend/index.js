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

// Generating JWT

app.post("/user/generateToken", (req, res) => { 
  let data = {
    time: Date(), 
    userId: 12, 
  }

  try {
    const token = jwt.sign(data, jwtSecretKey);
    res.send(token)
  } catch (error) {
    console.log(error); 
    res.status(500).send("Internal Server Error")
  }

  res.send(token); 
})

// Verification of JWT

app.get("/user/validateToken", (req, res) => {
  try {
    const token = req.header(tokenHeaderKey); 

    const verified = jwt.verify(token, jwtSecretKey); 
    if (verified) {
      return res.send("Successfully Verified");
    } else {
      return res.status(401).send(error); 
    }
  } catch (error) {
    return res.status(401).send(error); 
  }
})