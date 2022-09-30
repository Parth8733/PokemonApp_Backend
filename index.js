const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//imported pokemon routes
const pokemonRoute = require("./routes/pokemon");

dotenv.config();
//connection to mongo database
mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true }, () => {
  console.log("Database Connection established");
});
app.use(express.json());
app.get("/",(req, res) => {
    res.send("Welecome to Pokemon World!");
})
app.use('/Pokemon', pokemonRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Always watching... on port ${port}`));

