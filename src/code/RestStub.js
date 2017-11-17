// import * as Constants from 'Constants.js';
/*
  Class for running individual test.
*/
class RestStub {
  constructor(data) {
  	this.label = "Basic TestStub";
    this.resource = "http://google.ca"
  	this.requestType = "GET";
  	this.requestData = {};
  	this.responseData = {};
  	this.expectedData = {};
  	this.identifier = null;


  	//Load data if TestStub is created from a saved file.
  	if (data != null){
  		this.label = data.label;
      this.resource = data.resource;
  		this.requestType = data.requestType;
  		this.requestData = data.requestData;
  		this.responseData = data.responseData;
  		this.expectedData = data.expectedData;
  		this.identifier = data.identifier;
  	}

  }


  /*
    Converts this class into a json.
  */
  toJson(){
  var data = {};
	data.label = this.label;
  data.resource = this.resource;
	data.requestType = this.requestType;
	data.requestData = this.requestData;
	data.responseData = this.responseData;
	data.expectedData = this.expectedData;
	data.identifier = this.identifier;
	return data;
  }



  // Set requestType
  set setRequestType(newType){
  	if (Globals.REQUESTTYPES.indexOf(newType) > -1){
  		this.requestType = newType;
  	}
  	else{
  		console.log("New request type: ");
  		console.log(newType);
  		throw "Type of request does not exist." + newType;
  	}
  }
  
  // Get requestType
  getRequestType(){
  	return this.requestType;
  }

  runTest(callback){

  }

}