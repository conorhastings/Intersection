var express = require('express');
var app = express();
var _ = require('underscore');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile('/public/index.html', {"root": __dirname});
});

app.get('/boards', function(req,res){
	var board = {'row1': [], 'row2':[], 'row3':[],'row4':[],'row5':[]}
	_(5).times(function(){ 

		_(5).times(function(n){
			board['row'+(n+1).toString()].push(_.random(19,41))
		});
	});
	res.send(JSON.stringify(board));
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});


http.listen(3000, function(){
	console.log('listening on *:3000');
});

