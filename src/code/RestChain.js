// import * as Constants from 'Constants.js';

/*
  Class for running tests in order.
*/
class RestChain {
  /*
	Creast a RestChain.
  */
  constructor(data) {
  	this.label = "RestChain";
  	this.reststublist = [];
  	this.identifier = "";
  	if (data != null){
  		this.identifier = data.identifier;
  		this.reststublist = data.reststublist;
  		this.label = data.label;
  	}
  }

  /*
	Adds a test identifier to the TestChain at the end.
  */
  addTest(identifier){
  	this.reststublist.add(identifier);
  }

  /*
	Removes a test identifier from the TestChain.
  */
  removeTest(identifier){
  	if (identifier in this.reststublist)
  			this.reststublist.splice(array.indexOf(identifier), 1);
  }

  /*

  */
  moveTest(identifier, location){
  	if (identifier in this.reststublist){
	  	this.removeTest(identifier);
	  	this.reststublist.splice(location, 0, identifier);
	}
  }	

  /*

  */
  toJson(){
  	data = {};
	data.label = this.label;
	data.reststublist = this.reststublist;
	data.identifier = this.identifier;
	return data;
  }
}