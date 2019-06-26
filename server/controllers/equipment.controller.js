const Equipment = require('../models/equipments');
const equipmentcontroller= {};

equipmentcontroller.getEquipment = async (req, res)=>{
    const equipment = await Equipment.findById(req.params.id);
    res.json(equipment);
}

equipmentcontroller.getEquipments = async(req, res)=>{
    const equipments = await Equipment.find();
    res.json(equipments);
}

equipmentcontroller.createEquipment = async (req, res)=>{
    const equipment = new Equipment(req.body);
    await equipment.save();
    res.json({status:'Equipment Saved'});
}

equipmentcontroller.editEquipment = async (req, res) =>{
    const equipment = {
        name : req.body.name,
        bodyArea: req.body.bodyArea,
        muscles: req.body.muscles,
        type: req.body.type,
        description: req.body.description
    }
    await Equipment.findByIdAndUpdate(req.params.id, {$set:equipment},{new:true});
    res.json({status:'Equipment Updated'});
}

equipmentcontroller.deleteEquipment = async (req, res)=>{
    await Equipment.findByIdAndRemove(req.params.id);
    res.json({status :'Equipment Removed'});
}

module.exports = equipmentcontroller;


