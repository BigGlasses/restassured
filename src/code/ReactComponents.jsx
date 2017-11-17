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
		return (
		<div className="col-12 restStubSelect " key={stub.identifier} onClick={changeCommand}>
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
	              {stub.resource}
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
