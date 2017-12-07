// import * as Constants from 'Constants.js';
/*
  Class for running individual test.
*/
class RestStub {
  constructor(data) {
  	this.label = "Basic RestStub";
    this.resource = "http://google.ca"
  	this.requestType = "GET";
  	this.requestData = {};
  	this.responseData = {};
  	this.expectedData = {};
  	this.identifier = null;
    this.selected = false;
    this.success = false;
    this.ranTest = false;


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
    Returns a json object equivalent for this RestStub 
    This can either be used for storage or to create a copy RestStub (through the constructor)
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



  // Set requestType of the RestStub
  setRequestType(newType){
  	if (REQUEST_TYPES.indexOf(newType) > -1){
  		this.requestType = newType;
  	}
  	else{
  		//console.log("New request type: ");
  		//console.log(newType);
  		throw new Error("Type of request does not exist." + newType);
  	}
  }
  
  // Getter for requestType of teh RestStub
  getRequestType(){
  	return this.requestType;
  }

}