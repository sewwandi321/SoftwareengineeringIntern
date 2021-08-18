const express = require('express');
const router = express.Router();
const controller = require('../controllers/pet')


module.exports = function(){
    router.post('/create',controller.createPet);
    router.get('/',controller.getAllPets);
    router.get('/:id',controller.getpetsbyId);
    router.delete('/pet/delete/:petid',controller.deletePet);
    router.delete('/pet/edit/:petid',controller.editpet);
    // router.get('/:id',controller.getVehicleForCategory);
    return router;
}
