// 
//Takes a JSON object and turns it into a string.
function prettify(data){
	return JSON.stringify(data, undefined, 4);
}

//Takes a json and parameterizes it.
function JSONtoParam(data){
	return $.param(data);
}