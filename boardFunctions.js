function createBoardColumns(){

	var board = {'row1': [], 'row2':[], 'row3':[],'row4':[],'row5':[]}
	_(5).times(function(){ 
		_(5).times(function(n){
			board['row'+(n+1).toString()].push(_.random(19,41))
		})
	});

	return board

}

function yourDomBoard(){
	board = createBoardColumns()
	console.log(board)
	$('.columnBoard').append('<tr class="vote"></tr>')
	_(5).times(function(n){
		$('.vote').append('<th class="column col'+(n+1).toString()+'"><i class="fa fa-caret-down fa-3x"></i></th>')
		$('.columnBoard').append('<tr class =row'+(n+1).toString()+'></tr>')

		_.each(board['row'+(n+1).toString()],function(number){
			
			$('.row'+(n+1).toString()).append('<td class="square">'+number+'</td>')
		})
	})


		_(5).times(function(n){
		$('.rowBoard').append('<tr class =rowopp'+(n+1).toString()+'></tr>')
		$('.rowopp'+(n+1).toString()).append('<td"><i class="fa fa-caret-right fa-3x"></i></td>')


		_.each(board['row'+(n+1).toString()],function(number,index){
			if(index==0){
				$('.rowopp'+(n+1).toString()).append('<td class="stupid"><i class="fa fa-caret-right fa-3x"></i></td>')
			}
			$('.rowopp'+(n+1).toString()).append('<td class="square">'+number+'</td>')
		})
	})

}
function opponentDomBoard(){
	board = createBoardColumns()
	console.log(board)
	_(5).times(function(n){
		$('.rowBoard').append('<tr class =rowopp'+(n+1).toString()+'></tr>')
		$('.rowopp'+(n+1).toString()).append('<td"><i class="fa fa-caret-right fa-3x"></i></td>')


		_.each(board['row'+(n+1).toString()],function(number,index){
			if(index==0){
				$('.rowopp'+(n+1).toString()).append('<td class="stupid"><i class="fa fa-caret-right fa-3x"></i></td>')
			}
			$('.rowopp'+(n+1).toString()).append('<td class="square">'+number+'</td>')
		})
	})
}