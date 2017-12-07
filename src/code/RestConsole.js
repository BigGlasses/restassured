log_list = []

/*
	Appends a message to the console.
*/
function restLog(message){
	log_list.push(message);
	reRenderConsole();
}


/*
	Renders the console anew.
*/
function reRenderConsole(){
	var x = log_list.slice();
	x.reverse();
	listItems = x.map(consoleMessage);
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  listItems
	), document.getElementById('consoleholder'));
}