const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const pokemonRoute = require("./routes/pokemon");

dotenv.config();
mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true }, () => {
  console.log("Database Connection established");
});
app.use(express.json());
app.get("/",(req, res) => {
    res.send("Welecome to Pokemon World!");
})
app.use('/Pokemon', pokemonRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Always watching... on port ${port}`));

