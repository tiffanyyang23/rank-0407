var express = require('express');
var router = express.Router();
//----------------------------------------------------
// 透過require引用db.js的pool物件,
// 即使多個程式均引用, 在系統中只有一份pool物件.
//----------------------------------------------------
var pool = require('./lib/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    pool.query('select * from rankperson', function (error, results, fields) {
        if (error){
            res.render('pointrank', {data:[]});
        }else{
            res.render('pointrank', {data:results});
        }
		pool.query('SELECT * FROM student', function(err, results) {       
			if (err) {
				studentData=[];
			}else{
				studentData=results;
			}
		
		});		
    });
});

module.exports = router;