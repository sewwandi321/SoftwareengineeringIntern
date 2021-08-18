const { response } = require('express');
const Pet = require('../models/pet');



const createPet = async (req,res) =>{
    if(req.body){
        const pet = new Pet(req.body);
        await pet.save()
        .then(data =>{
            res.status(200).send({ data: data});
        })
        .catch(error =>{
            res.status(500).send({error : error.message})
        })
    }
}
const getAllPets = async (req,res) =>{
    await Pet.find({})
    .then(data =>{
        res.status(200).send({ data:data});
    })
    .catch(error =>{
        res.status(500).send({error : error.message})
    });
}

const getpetsbyId = (req, res) => {

    console.log('hey')
    //res.status(200).json({file: req.files , body:req.body});
    const { petid } = req.params;
   // console.log("pro id", productid)
    if (petid) {
        Pet.findOne({ _id: petid })
            .exec((error, pet) => {
                console.log('error');
                if (error)
                    return res.status(400).json({ error });
                console.log(error)
                if (pet) {
                    res.status(200).json({ pet });
                    console.log(pet);
                }
            });

    } else {
        return res.status(400).json({ error: 'params required' });
    }
};
const deletePet = (req, res) => {
    const { petid } = req.body.payload;
    if (petid) {

        Pet.deleteOne({ _id: petid }).exec((error, pet) => {
            if (error)
                return res.status(400).json({ error });
            console.log(error)
            if (pet) {
                res.status(200).json({ pet });
                console.log(pet);
            }
        });

    } else {
        return res.status(400).json({ error: 'params required' });
    }
};
const editpet = async (req, res) => {
    const { petid } = req.params;
    if (petid) {
        const { _id, name, description} = req.body;
        const updatedpet = {
            name, description
        }
        await Pet.findByIdAndUpdate(petid, updatedpet, { new: true });
        res.json(updatedpet);

    }

}

module.exports = {
    createPet,
    getAllPets,
    getpetsbyId,
    deletePet,
    editpet
    // getVehicleForCategory
}