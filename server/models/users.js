const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');


const  userSchema = new Schema({
    name :{ type: String, required: true},
    email :{type: String, unique:true, lowercase:true , required: true},
    password :{type : String, select:false, required: true},
    sex: {type: String, required: true},
    bodyType:{type: String, required: true},
    age: {type: Number, required: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true}
    
});

// cifrando contraseña
userSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10); // realizar el algoritmo 10 veces
    const hash = bcrypt.hash(password,salt); // generamos la contraseña cifrada con el hash creado anteriormente
    return hash;
};

//Comparamos la contraseña que nos envia el usuario con la que hay en la base de datos
// //usamos ES5 para poder usar el metodo this
userSchema.method.matchPassword = async function (password){
    return bcrypt.compare(password,this.password);
}

module.exports = mongoose.model('User',userSchema);
