var express = require('express');
var router = express.Router();
var Mongoclient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res){
  console.log(req.body);
  Mongoclient.connect('mongodb://localhost:27017',function(err,client){
    if(err){
    console.log("Internal Issue",err)
    res.send("Your submit request Failed",err.message);
    }
    else{
    client.db('orginal').collection('first').insertOne(req.body)
    res.send("Your Data has been successfully inserted");
    }
  })
  
})

module.exports = router;
