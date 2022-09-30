const Pokemon = require('../models/Pokemon');

exports.show = (req, res) => {
    res.send("Welecome to Pokemon Center!");
} 

exports.create = async (req, res)=> {
    const newPokemon = new Pokemon({
        name:req.body.name,
        types:req.body.types,
        image_url:req.body.image_url
    })
    try{
       const pokemon = await newPokemon.save();
        res.status(200).json(pokemon);
    }catch(err){
        res.status(400).json(err.message);
        console.log(err);
    }
}