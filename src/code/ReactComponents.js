class RestStubDOM extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.rstub.Label
        );
    }
}

function stubSelect(stub) {

    var copyCommand = function () {
        uiCopyRestStub(stub.identifier);
    };
    var deleteCommand = function () {
        uiDeleteRestStub(stub.identifier);
    };
    var changeCommand = function () {
        changeCurrentRestStub(stub.identifier);
    };
    return React.createElement(
        "div",
        { className: "col-12 restStubSelect ", key: stub.identifier, onClick: changeCommand },
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col-12 restStubSelect-title" },
                stub.label
            ),
            React.createElement(
                "div",
                { className: "col-6" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-primary", onClick: copyCommand },
                    "Copy"
                )
            ),
            React.createElement(
                "div",
                { className: "col-6" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-danger", onClick: deleteCommand },
                    "Delete"
                )
            ),
            React.createElement(
                "div",
                { className: "col-6 text-left restStubSelect-type" },
                stub.resource
            ),
            React.createElement(
                "div",
                { className: "col-6 text-right restStubSelect-type" },
                stub.getRequestType()
            ),
            React.createElement(
                "div",
                { className: "col-12 restStubSelect-id" },
                stub.identifier
            )
        )
    );
}