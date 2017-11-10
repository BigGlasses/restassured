import * as Globals from 'Globals.js';
import * as JSONParser from 'JSONParser';

class TestStub {
  constructor(data) {
  	this.label = "Basic TestStub";
  	this.request_type = "GET";
  	this.request_data = {};
  	this.response_data = {};
  	this.expected_data = {};
  	this.identifier = null;


  	//Load data if TestStub is created from a saved file.
  	if (data != null){
  		this.label = data.label;
  		this.request_type = data.request_type;
  		this.request_data = data.request_data;
  		this.response_data = data.response_data;
  		this.expected_data = data.expected_data;
  		this.identifier = data.identifier;
  	}
  	
  }

  get toJSON(){
  	data = {};
	data.label = this.label;
	data.request_type = this.request_type;
	data.request_data = this.request_data;
	data.response_data = this.response_data;
	data.expected_data = this.expected_data;
	data.identifier = this.identifier;
  }

  //Run a test
  get area() {

  }

  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }

  // Set request_type
  set setRequestType(newType){
  	if (newType in Globals.REQUEST_TYPES){
  		this.request_type = newType;
  	}
  	else{
  		console.log("New request type: ");
  		console.log(newType);
  		throw "Type of request does not exist." + newType;
  	}
  }

}