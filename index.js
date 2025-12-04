const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Running from port ${port}`);
});
