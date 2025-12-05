const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

const users = [
  { id: 1, name: "George", email: "george.bailly@gmail.com" },
  { id: 2, name: "Shane", email: "shane.bond@gmail.com" },
  { id: 3, name: "Chris", email: "chris.rogers@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

// app.post("/users", (req, res) => {
//   console.log("users post method");
//   console.log(req.body);
//   const newUser = req.body;
//   newUser.id = users.length + 1;
//   users.push(newUser);
//   res.send(newUser);
// });

app.listen(port, () => {
  console.log(`Running from port ${port}`);
});
