const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();
const bcrypt = require("bcryptjs"); 


dotenv.config(); 

let PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server is up and running on localhost:${PORT} ...`)
})

const posts = [
  {
    username: "Joshardals", 
    title: "Python Ninja", 
  }, 
  {
    username: "FireLord", 
    title: "ZukoMerchant"
  }
]

app.get("/posts", async (req, res) => {
  const hashedPassword = await bcrypt.hash(password, 10); 
  
 
})

// app.get("/posts", (req, res) => {
//   res.json(posts)
// })

// app.get("/login", (req, res) => {
//   // Authenticate User 

//   const username = req.body.username; 
//   const user = { name: username }; 

//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//   res.json({ accessToken })
// })


app.post("/api/register", async (req, res) => {
  try {
    // const { firstName, lastName, email, password } = req.body;
    
    // if (!firstName || !lastName || !email || !password) {
    //   return res.status(400).send({ message: "Missing required fields"})
    // }

    // const hashedPassword = await bcrypt.hash(password, 10); 

    // res.status(201).send({
    //   firstName, 
    //   lastName, 
    //   email, 
    //   password: hashedPassword, 
    // })

    console.log('Raw request:' ,req.rawHeaders);
    console.log('Parsed request body:' ,req.body);
    console.log('Parsed Request Params:', req.params);

  } catch (error) {
    console.log("Registration error: ", error); 
    res.status(500).send({ message: "Internal Server Error"});
  }
})