const User = require('../models/users');
const usercontroller = {};

usercontroller.getUsers = async (req, res)=>{
    const users = await User.find();// consulta la base de datos y cuandp termine lo garda en una constante
    res.json(users);
    
}

usercontroller.createUser = async (req, res)=>{
    // validamos email repetido
    const emailUser = await User.findOne({email: req.body.email});
    if(emailUser){
        console.log("Ya existe un usurio con el email") 
        //res.flash('error_msg', 'The Emain is already in use');
         // rediccionar al signup....
         //res.redirect('/');
    }
    else
    {
        const user = new User(req.body);
        // encriptamos la contraseña
        //user.password = await user.encryptPassword(password);
        await user.save();
        console.log(user) // en la propiedad body tomamos los datos que nos esta enviando el cliente
   
        res.json({
            status: 'User Saved'
        });

        // redireccionar al login....
    }

    
}

usercontroller.getUser = async (req, res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
};

usercontroller.editUser = async (req, res)=>{
    const { id } = req.params;
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        sex: req.body.sex,
        bodyType: req.body.bodyType,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});//si el dato a actualizar no existe , crea uno nuevo
    res.json({status: 'User Updated'});
}

usercontroller.deleteUser = async (req, res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Removed'});
}
module.exports = usercontroller;