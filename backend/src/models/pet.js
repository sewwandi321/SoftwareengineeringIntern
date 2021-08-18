const mongoose = require('mongoose');


const  PetSchema = new mongoose.Schema({
    name:{ type:String, required: true, trim :true },
    description:{ type:String, required: true, trim :true },
   
});
const Pet = mongoose.model('pets',PetSchema);
module.exports=Pet;