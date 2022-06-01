var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    res.json("Test users api");
});

module.exports = router;