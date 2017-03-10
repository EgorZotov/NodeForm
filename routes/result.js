var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    render(request.body);
   // console.log(request.body);
});

/* GET users listing. */
function render(data){
    router.get('/', function(req, res, next) {
        res.render('result',{data:data});
    });
}


module.exports = router;
