const express = require('express');
router = express.Router();

const user = require('../controllers/user.controller');// requiero todas las funciones del usuario


router.get('/', user.getUsers);
router.post('/',user.createUser);
router.post('/:name',user.loginUser); // desde angular nos manda el id
router.put('/:id',user.editUser);
router.delete('/:id',user.deleteUser);



module.exports = router;
