var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Chicken = require('../models/Chicken');

/* GET chicken listing. */
router.get('/', async(req, res,next) => {
  res.json(await mongoose.model('Chicken').find({}));
});

router.post('/', async(req,res,next) =>{
  res.json(await mongoose.model('Chicken').create(req.body));
});

router.put('/:id', async(req,res,next)=>{
  res.json(await mongoose.model('Chicken').findByIdAndUpdate(req.params.id, req.body));
});
router.patch('/:id', async(req,res,next)=>{
  res.json(await mongoose.model('Chicken').findByIdAndUpdate(req.params.id, req.body));
})
router.delete('/:id', async(req,res,next)=>{
  res.json(await mongoose.model('Chicken').findByIdAndRemove(req.params.id));
})
module.exports = router;
