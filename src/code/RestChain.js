import * as Constants from 'Constants.js';


class TestStub {
  constructor(data) {
  	this.label = "RestChain";
  	this.reststublist = [];
  	this.identifier = "";
  }

  addTest(identifier){

  }

  removeTest(identifier){

  }

  moveTest(identifier, location){

  }	


  toJson(){
  	data = {};
	data.label = this.label;
	data.reststublist = this.reststublist;
	data.identifier = this.identifier;
	return data;
  }
}