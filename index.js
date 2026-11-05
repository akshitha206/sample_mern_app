let express=require("express");
let cors=require('cors');
let app=express();
let hrroutes=require('./routes/hr_route');
let emproutes=require('./routes/emp_route');
let mongoose=require('mongoose');

app.use(cors())

mongoose.connect("mongodb+srv://xyz1597901_db_user:YDvL0FO840xKjAcq@cluster0.otukjyc.mongodb.net//hrmanagement")
  .then(()=>{
    console.log("connected with mongodb database")
  }).catch((err)=>{
    console.log(err);
  })

app.use(express.json());
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes);

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})
