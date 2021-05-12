var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ChickenSchema = new Schema({
    name : { type: String, required: true, unique: true },
    birthday: { type: Date, default: Date.now },
    weigth: { type: Number, required: true },
    steps: { type: Number, default: 0 },
    isRunning: { type: Boolean, default: false }
});


module.exports = mongoose.model('Chicken',ChickenSchema);