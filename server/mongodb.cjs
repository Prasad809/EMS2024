const mongodb=require('mongoose')

mongodb.connect('mongodb://localhost:27017/EMSADMIN')
.then(()=>console.log("DB Created"))
console.log("Mongodb Connected");

//Admin Schema
const adminSchema=new mongodb.Schema({
    email:String,
    password:String,
    isAdmin:Boolean,
})

//creating Adminmodel
const adminModel=new mongodb.model('ADMIN',adminSchema)
//EmployeeSchema
const employeeSchema=new mongodb.Schema({
    name:String,
    dob:String,
    email:String,
    address:String,
    designation:String,
    empId:Number,
    fatherName:String,
    salary:Number,
    phone:Number,
    education:String,
    adhar:String,
    photo:{
        data:Buffer,
        contextType:String
    },
    isActive:Boolean,
})
//creating model
const empModel=new mongodb.model('EMPLOYEE',employeeSchema)

module.exports = {adminModel,empModel};