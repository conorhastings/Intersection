var express = require('express');
var app = express();
var _ = require('underscore');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile('/public/index.html', {"root": __dirname});
});


var players = []

app.get('/boards', function(req,res){
	var board = {'row1': [], 'row2':[], 'row3':[],'row4':[],'row5':[]}

	_(5).times(function(n){ 
		var numbers = []
		_(5).times(function(x){
			if(x == 0 || x == 1){
				randNumber = _.random(5,40)
				numbers.push(randNumber)
			}else if(x == 2 || x == 3){
				var sum = _.reduce(numbers, function(total, num){ return total + num; }, 0);

				var largest = 100 - sum

				if(largest >= 40){
					randNumber = _.random(5,30)
					numbers.push(randNumber)
				}else{
					console.log(sum)
					randNumber = _.random(1,largest)
					numbers.push(randNumber)
				}
				//ok
			}else{
				var sum = _.reduce(numbers, function(total, num){ return total + num; }, 0);

				randNumber =  (1,(100-sum))
			}
			board['row'+(n+1).toString()].push(randNumber)
		});
	});

	var shuffleBoard = _.map(board, function(row){ return _.shuffle(row);});

	res.send(JSON.stringify(shuffleBoard));
});

io.on('connection', function(socket){
	io.emit('totalPlayers', players);
	console.log('a user connected');
	socket.on('disconnect', function(){
		players = []
		console.log('user disconnected');
	});
	socket.on('add player', function (player,id){
		socket.player = player;
		players.push(player)
		io.emit('totalPlayers', players);
		io.emit('add player', 'player joined')
		
	})
});



http.listen(3000, function(){
	console.log('listening on *:3000');
});

