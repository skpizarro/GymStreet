const express = require('express');
router = express.Router();

const equipment = require('../controllers/equipment.controller');


router.get('/', equipment.getEquipments);
router.get('/:id', equipment.getEquipment);
router.post('/', equipment.createEquipment);
router.put('/:id', equipment.editEquipment);
router.delete('/:id', equipment.deleteEquipment);

module.exports = router;
