let express = require('express');
let mongoose = require('mongoose');

let app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/sample_mern_app")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

let emp_route = require('./routes/emp_route');

app.use('/employee', emp_route);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});