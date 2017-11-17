// import * as Constants from 'Constants.js';
// import * as {RestStub} from 'RestStub.js';
// import * as {RestChain} from 'RestChain.js';
// import * as {Profile} from 'Profile.js';


class ProfileStore {
   constructor() {
	this.allRestStubs = [];
	this.allRestChains = [];
	this.allIdentifiers = [];
	this.allProfiles = [];

   }



	getRestStubFromID(identifier){
		return arraySearch(allRestStubs, identifier);
	}

	getRestChainFromID(identifier){
		return arraySearch(allRestChains, identifier);
	}

	/*
	Creates a new RestStub and stores it in memory.
	Returns the RestStub's identifier.
	*/
	newRestStub(){
		newRst = new RestStub(null);
		newIdentifier = generateIdentifier();
		newRst.identifier = newIdentifier;
		allRestStubs.add(newRst);
		return newIdentifier;
	}

	/*
	Creates a new RestChain and stores it in memory.
	Returns the RestChain's identifier.
	*/
	newRestChain(){
		newRst = new RestChain(null);
		newIdentifier = generateIdentifier();
		newRst.identifier = newIdentifier;
		allRestChains.add(newRst);
		return newIdentifier;
	}

	/*
	Deep copies a RestStub and stores it in memory.
	Returns the RestStub's identifier.
	*/
	copyRestStub(identifier){
		rst = getRestStubFromID(identifier);
		rstJson = rst.toJson();

		newRst = new RestStub(rstJson);
		newIdentifier = generateIdentifier();
		newRst.identifier = newIdentifier;
		allRestStubs.add(newRst);
		return newIdentifier;
	}

	/*
	Deep copies a RestChain and stores it in memory.
	Returns the RestChain's identifier.
	*/
	copyRestChain(identifier){
		rst = getRestChainFromID(identifier);
		newIdentifier = generateIdentifier();
		rst.identifier = newIdentifier;
		newRst = new RestChain(rst.reststublist);
		allRestStubs.add(newRst);
		return newIdentifier;
	}

	/*
	Generate a unique identifier.
	*/
	generateIdentifier(){
		do {
			newIdentifier = randomHash();
		} while (newIdentifier in allIdentifiers);
		allIdentifiers.add(newIdentifier);
		return newIdentifier;
	}

	/*
	Generate a random string of characters.
	*/
	randomHash(){
		var s = "";
		for (i = 0; i < Constants.ID_LENGTH; i ++){
			var j = Math.floor(Math.random()*Constants.ID_POOL.length);
			s += Constants.ID_POOL.charAt(j);
		}
		return s;
	}

	/*
	Creates a new profile and stores it in memory.
	Return the new profile.
	*/
	newProfile(){
		p = Profile();
		allProfiles.add(p);
		return p;
	}

	/**
	Deletes a RestStub.
	*/
	deleteRestStub(identifier){
			// Remove the stub.
			for (i = 0; i < allRestStubs.length; i ++){
				if(identifier = allRestStubs[i].identifier){
					allRestStubs.splice(i, 1);
				}
			}

			// Remove the stub from all profiles.
			for (i = 0; i < allProfiles.length; i ++){
				allProfiles[i].removeRestStub(identifier);
			}

			// Remove the stub from all testchains.
			for (i = 0; i < allRestChains.length; i ++){
				allRestChains[i].removeTest(identifier);
			}
	}

	/**
	Deletes a RestChain.
	*/
	deleteRestChain(identifier){

			// Remove the stub from all testchains.
			for (i = 0; i < allRestChains.length; i ++){
				if(identifier = allRestChains[i].identifier){
					allRestChains.splice(i, 1);
				}
			}
			// Remove the chain from all profiles.
			for (i = 0; i < allProfiles.length; i ++){
				allProfiles[i].removeRestChain(identifier);
			}

	}

	/*
	Inserts an element into an array.
	*/
	arrayInsert(l, obj){
		l.add(obj);
	}

	/*
	Searches for an element in an array.
	*/
	arraySearch(l, identifier){
		for (i = 0; i < l.length; i ++)
			if (l[i].identifier == identifier)
				return identifier;
		
		Console.log("No object with identifier " + identifier);
		return null
	}
}