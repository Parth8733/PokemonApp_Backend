const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req, res) => {
    res.send("Welecome to Pokemon World!");
})

app.listen(8800, () => {
  console.log("Backend server is running");
});
