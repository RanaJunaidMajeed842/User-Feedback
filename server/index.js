const express = require("express")
const cors = require('cors')
const mongoose  = require("mongoose")
const UserModel = require("./UserDataModels/models")


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Users");

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json('Success');
          } else {
            res.status(401).json("The password is incorrect");
          }
        } else {
          res.status(404).json("User not found: Sign Up First");
        }
      })
      .catch(err => {
        console.error("Error during login:", err);
        res.status(500).json("Internal Server Error");
      });
  });

app.post('/', (req, res) =>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err=>console.error(err))
})

app.listen(8080, () =>{
    console.log("Server is running");
})