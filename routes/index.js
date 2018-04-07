var express = require('express');
var router = express.Router();

var pool = require('./lib/db.js');
/* GET home page. */
router.get('/', function(req, res, next) {
   pool.query('select * from rankbook', function (error, results, fields) {
        if (error){
            res.render('bookrank', {bookdata:[]});
        }else{
            res.render('bookrank', {bookdata:results});
        } 
	});	
	pool.query('select * from book', function(err, results, fields) {       
		if (error) {
			res.render('bookrank', {data:[]});
		}else{
			res.render('bookrank', {data:results});
		}
		
    });
});

module.exports = router;
