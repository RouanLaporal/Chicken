const Chicken = require('../models/Chicken');

exports.run = (req, res, next) =>{
    Chicken.findOne({ name: req.body.name })
    .then(chicken =>{
        chicken.steps = chicken.steps + 1;
        chicken.save();
        res.status(200).json({ steps: chicken.steps })
    })
    .catch(error =>{ res.status(500).json({ error })})
};