export class User {
    constructor(_id ='', username='',email='',password='',sex='',bodyType='',age=0,height=0,weight=0){
        this._id=_id
        this.username =username
        this. email =email
        this.password =password
        this.sex=sex
        this.bodyType=bodyType
        this.age=age
        this.height=height
        this.weight=weight
    }
    _id:String
    username :String
    email :String
    password :String
    sex: String
    bodyType:String
    age: Number
    height: Number
    weight: Number
}
