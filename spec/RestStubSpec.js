describe("RestStub", function() {
  var rst;
  var rst2;

  beforeEach(function() {
    rst = new RestStub(null)
    rst2 = new RestStub(null)
  });


  describe("When creating a RestStub", function() {
    it("it should be empty.", function() {
      expect(rst.identifier).toBeNull()
    });
    it("it should be a copy of data if entered.", function() {
      rst2.identifier = "Dogs"
      var newRst = new RestStub(rst2.toJson())
      expect(newRst.identifier).toEqual(rst2.identifier)
    });
  });

  describe("When setting the request type", function() {
    it("it should accept GET/PUSH/POST/DELETE.", function() {
      expect(rst.setRequestType("GET")).nothing()
      expect(rst.setRequestType("PUT")).nothing()
      expect(rst.setRequestType("POST")).nothing()
      expect(rst.setRequestType("DELETE")).nothing()
    });

    it("it should not accept non GET/PUSH/POST/DELETE.", function() {
      expect(rst.setRequestType).toThrowError()
    });
  });


});
