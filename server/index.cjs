const express=require('express')
const cors=require('cors')
const model=require('./mongodb.cjs')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
const port=9999;
app.listen(port,(err)=>{
    if(err) throw err;
    console.log("Server Running");
})


app.get('/getAdmin',(req,res)=>{
    model.adminModel.find({})
    .then(result =>{
        res.json(result)
    })
    .catch(err =>res.json(err))
})

app.post('/signin',(req,res)=>{
    model.adminModel.create(req.body)
    .then(result =>res.json(result))
    .catch(err =>res.json(err))
})
app.post('/login',(req,res)=>{
    let {email,password}=req.body
    model.adminModel.findOne({email:email})
    .then(result =>{
        if(result){
            if((result.password === password)){
                res.json({login:true})
            }else{
                res.json({login:false})
            }
        }else{
            res.status(500)
            res.json("No Recard")
        }
        })
    .catch(err =>res.json(err))
})

//Employee Registration
app.post('/empSignUp',(req,res)=>{
    model.empModel.create(req.body)
    .then(result =>res.json(result))
    .catch(err =>res.json(err))
})
//Get the employees
app.get('/getemp',(req,res)=>{
    model.empModel.find({})
    .then(result =>{
        res.json(result)
    })
    .catch(err =>res.json(err))
})

//Get the employee based on Id
app.get('/empGet/:id',(req,res)=>{
    let {id}=req.params;
    model.empModel.findById({_id:id})
    .then(result=>{
        res.json(result)
    })
    .catch(err =>res.json(err))
})
//Updating Employee
app.patch('/updateEmp/:id',(req,res)=>{
    const {address,designation,salary,phone,photo}=req.body
    const {id}=req.params
    model.empModel.findByIdAndUpdate({_id:id},{address:address,designation:designation,salary:salary,phone:phone,photo:photo})
    .then(result =>{
        res.json(result)
    })
    .catch(err =>res.json(err))
})
//deleting Employee
app.delete('/delete/:id',(req,res)=>{
    let {id}=req.params;
    model.empModel.findByIdAndDelete({_id:id})
    .then(result=>{
        res.json(result)
    })
    .catch(err =>res.json(err))
})

