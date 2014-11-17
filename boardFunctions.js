function createBoardColumns(){

	var board = {'col1': [], 'col2':[], 'col3':[],'col4':[],'col5':[]}
	_(5).times(function(){ 
		_(5).times(function(n){
			board['col'+(n+1).toString()].push(_.random(19,41))
		})
	});

	return board

}

