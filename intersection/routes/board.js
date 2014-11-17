var express = require('express');
var router = express.Router();
var _ = require('underscore');

router.get('/', function(req, res) {
	var board = {'row1': [], 'row2':[], 'row3':[],'row4':[],'row5':[]}
	_(5).times(function(){ 
		_(5).times(function(n){
			board['row'+(n+1).toString()].push(_.random(19,41))
		})
	});
	res.send(JSON.stringify(board));
});

module.exports = router;
