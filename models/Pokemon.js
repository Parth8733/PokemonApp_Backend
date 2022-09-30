const mongoose = require("mongoose");
// pokemon schema design
const PokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    types: {
      type: Array,
      default: [],
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Pokemons", PokemonSchema);
