	class RestStubDOM extends React.Component {
	  render() {
	    return (
	      <div>
	        Hello {this.props.rstub.Label}
	      </div>
	    );
	  }
	}

	function stubSelect(stub){

		var copyCommand = function() {uiCopyRestStub(stub.identifier)};
		var deleteCommand = function() {uiDeleteRestStub(stub.identifier)};
		var changeCommand = function() {changeCurrentRestStub(stub.identifier)};
		var colorClass = "";
		if (stub.selected) colorClass += " restStubSelectSelected";
		if (stub.success) colorClass += " restStubSelectSuccess";
		if (stub.ranTest && stub.success == false) colorClass += " restStubSelectFailure";
		var resourceShorter = stub.resource;
		resourceShorter = resourceShorter.substring(Math.max(0,resourceShorter.length - 32) ,resourceShorter.length);
		return (
		<div className={"col-12 restStubSelect" + colorClass} key={stub.identifier} onClick={changeCommand}>
	      <div className="row">
	          <div className="col-12 restStubSelect-title">
	              {stub.label}
	          </div>
	          <div className="col-6">
	              <button type="button" className="btn btn-primary" onClick={copyCommand}>Copy</button>
	          </div>
	          <div className="col-6">
	              <button type="button" className="btn btn-danger" onClick={deleteCommand}>Delete</button>
	          </div>
	          <div className="col-6 text-left restStubSelect-type">
	              {resourceShorter}
	          </div>
	          <div className="col-6 text-right restStubSelect-type">
	              {stub.getRequestType()}
	          </div>
	          <div className="col-12 restStubSelect-id">
	              {stub.identifier}
	          </div>
	      </div>
		 </div>);
	}
