// import * as Constants from 'Constants.js';

class TestStub {
  constructor(data) {
  	this.label = "Basic TestStub";
  	this.requestType = "GET";
  	this.requestData = {};
  	this.responseData = {};
  	this.expectedData = {};
  	this.identifier = null;


  	//Load data if TestStub is created from a saved file.
  	if (data != null){
  		this.label = data.label;
  		this.requestType = data.requestType;
  		this.requestData = data.requestData;
  		this.responseData = data.responseData;
  		this.expectedData = data.expectedData;
  		this.identifier = data.identifier;
  	}

  }

  toJSON(){
  	data = {};
	data.label = this.label;
	data.requestType = this.requestType;
	data.requestData = this.requestData;
	data.responseData = this.responseData;
	data.expectedData = this.expectedData;
	data.identifier = this.identifier;
	return data;
  }



  // Set requestType
  set setRequestType(newType){
  	if (newType in Globals.REQUESTTYPES){
  		this.requestType = newType;
  	}
  	else{
  		console.log("New request type: ");
  		console.log(newType);
  		throw "Type of request does not exist." + newType;
  	}
  }
  
  // Set requestType
  get getRequestType(){
  	return this.requestType;
  }

  // Set
  runTest(callback){

  }

}