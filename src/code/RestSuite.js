// import * as Constants from 'Constants.js';
// import * as ProfileStore from 'Constants.js';
// import * as IO from 'Constants.js';
// import * as JsonParser from 'Constants.js';

function display(){
	
}

function saveAllToDisk(){
	
}

function loadAllFromDisk(location){
	
}

function saveSpecifiedToDisk(data){
	
}

var currentRestChain;
var currentRestStub;
var currentProfileStore;

function reRenderTestSelect(){
	rList = [];
	tests = currentRestChain.reststublist;
	for (var i = 0; i < tests.length; i ++){
		rList.push(currentProfileStore.getRestStubFromID(tests[i]));
	}

	listItems = rList.map(stubSelect);
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  listItems
	), document.getElementById('stubholder'));

}

function uiDeleteRestStub(identifier){
	currentProfileStore.deleteRestStub(identifier);
	if (currentRestStub.identifier == identifier){
		changeCurrentRestStub(currentProfileStore.allRestStubs[0].identifier);
	}
	reRenderTestSelect();
}

function uiCopyRestStub(identifier){
	currentProfileStore.copyRestStub(identifier);
	var newStubId = currentProfileStore.copyRestStub(identifier);
	currentRestChain.addTest(newStubId);
	changeCurrentRestStub(newStubId);
	reRenderTestSelect();
}

function uiCreateRestStub(){
	console.log(currentProfileStore.allRestStubs);
	var id = currentProfileStore.newRestStub();
	currentRestChain.addTest(id);
	console.log(currentProfileStore.allRestStubs);
	if (currentProfileStore.allRestStubs.length == 1){
		currentRestStub = currentProfileStore.getRestStubFromID(id);
		console.log(currentRestStub);
		displayCurrentRestStub();
	}
	changeCurrentRestStub(id);
	reRenderTestSelect();
}

// Saves the form data to the current test
function updateCurrentRestStub(){

	label =	$('#testLabelInput').val();
	requestData = $('#inputDataTextArea').val();
	requestExpectedData = $('#inputExpectedResponseTextArea').val();
	responseData = $('#responseTextArea').val();
	typeData = $('#inputTypeSelect').val();
	sendData = JSON.parse($('#inputDataTextArea').val());

	currentRestStub.label = label;
	currentRestStub.requestType = typeData;
	currentRestStub.requestData = JSON.parse(requestData);
	currentRestStub.responseData = JSON.parse(responseData);
	console.log(requestExpectedData)
	currentRestStub.expectedData = JSON.parse(requestExpectedData);

	params = $.param(sendData);
	request_url = currentRestStub.resource + "?" + params;
	$('#inputHTTPRequest').val(request_url);
	reRenderTestSelect();
}

//Change between expanded tests.
function changeCurrentRestStub(identifier){
	updateCurrentRestStub();
	currentRestStub = currentProfileStore.getRestStubFromID(identifier);
	displayCurrentRestStub();
}

//Show an expanded version of the current test.
function displayCurrentRestStub(){

	$('#testLabelInput').val(currentRestStub.label);
	$('#inputDataTextArea').val(prettify(currentRestStub.requestData));
	$('#inputExpectedResponseTextArea').val(prettify(currentRestStub.expectedData));
	$('#responseTextArea').val(prettify(currentRestStub.responseData));
	$('#inputTypeSelect').val(currentRestStub.requestType);


	sendData = currentRestStub.requestData;

	params = $.param(sendData);
	request_url = currentRestStub.resource + "?" + params;
	$('#inputHTTPRequest').val(request_url);

}



currentProfileStore = new ProfileStore();
var id = currentProfileStore.newRestChain();
currentRestChain = currentProfileStore.getRestChainFromID(id);
uiCreateRestStub();

// ReactDOM.render(
//   <div>{listItems}</div>,
//   document.getElementById('stubholder')
// );


//
var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}