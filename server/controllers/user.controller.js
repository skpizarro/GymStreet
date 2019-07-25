const User = require('../models/users');
const usercontroller = {};

usercontroller.getUsers = async (req, res)=>{
    const users = await User.find();// consulta la base de datos y cuandp termine lo garda en una constante
    res.json(users);
    
}

usercontroller.createUser = async (req, res)=>{
    // creamos un arreglo de errores
    const errors = [];
    
    // validamos email repetido
    const emailUser = await User.findOne({email: req.body.email});
    if(emailUser){
        errors.push({text: "Ya existe un usurio con el email"});
        console.log("Ya existe un usurio con el email");
        //res.flash('error_msg', 'The Emain is already in use');
         // renderizar al Registro....
         //res.render('/');
    }

    const {password,confirmPass,name} = req.body;
    if(password != confirmPass)
    {
        console.log("Las contraseñas no coinsiden");
        errors.push({text: "Las contraseñas no coinsiden"});
    }

    if(password.length < 4)
    {
        console.log("Las contraseña debe ser de alemnos 4 caracteres");
        errors.push({text: "Las contraseñas no coinsiden"});
    }

    if(name=""){
        console.log("Por favor ingrese su nombre de usuario");
        errors.push({text: "Por favor ingrese su nombre de usuario"});
    }
    
    //Usamos una expresion regular para validar que el campo del nombre no permita caracteres especiales
    /*const valCarEsp = new RegExp('^[A-Z]+$', 'i')
    if(!valCarEsp.test(name))
    {
        console.log("El nombre de usuario debe no permite caracteres especiales");
        errors.push({text: "El nombre de usuario debe no permite caracteres especiales"});
    }
    */

    if(errors.length = 0)
    {
        const user = new User(req.body);
        // encriptamos la contraseña
        user.password = await user.encryptPassword(req.body.password);
        await user.save();
        console.log(user) // en la propiedad body tomamos los datos que nos esta enviando el cliente
   
        res.json({
            status: 'User Saved'
        });

        // redireccionar al login....
    }else
    {

        // rendrizar al Registro....
         //res.render('/',{errors, emailUser, password, confirmPass, name});
    }

    
}

usercontroller.loginUser = async (req, res)=>{
    const user = await User.find({name: req.params.name});
    //const user = await User.findById(req.params.id);
    if(user){
        res.json(user);
    }
    else
    {
        res.json({status : "El usuario no existe"})
    }
    
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