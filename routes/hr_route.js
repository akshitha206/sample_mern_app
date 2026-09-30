let express=require('express');
let router=express.Router();
let {users} =require('../models/users');

let {tasks}=require('../models/tasks')
router.get("/viewemployees",async (req,res)=>{
    let result=await users.find();
    res.send(result);
});

router.get("/viewemployees",(req,res)=>{
    res.send("View employees route");
});

router.post("/assign-task",async(req,res)=>{
    let data=req.body;
    let newTask=new tasks(data);
    let result=await newTask.save();
    res.send("assign-task route");
})

router.get("/viewtasks",(req,res)=>{
    res.send("viewtasks");
})

router.delete("/deleteemployee/:id",async(req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id)
    if(result){
        res.send("employee deleted success");
    }else{
        res.send("no user found");
    }
    res.send("delete employee");
})

module.exports=router;

