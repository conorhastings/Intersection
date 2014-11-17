$(function(){
	createBoardColumns().done(function(response){
		yourDomBoard(JSON.parse(response))
	})
	// opponentDomBoard()
})