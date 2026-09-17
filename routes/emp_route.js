let express = require('express');
let router = express.Router();

let { users } = require('../models/users');

router.post("/register", async (req, res) => {
    console.log(req.body);

    let newuser = new users(req.body);
    let result = await newuser.save();

    res.send(result);
});

module.exports = router;