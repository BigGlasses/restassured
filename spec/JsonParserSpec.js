describe("JsonParser", function() {
  var json1;

  beforeEach(function() {
    json1 = {
      animal : "cat",
      cookie : "chocolate",
      number : "2"
    }
  });

  describe("When prettifying a json", function() {
      it("it becomes a string.", function() {
        expect(prettify(json1)).toBeDefined()
      });
  });

  describe("When paramaterizing a json", function() {
      it("it is accurate.", function() {
        expect(JSONtoParam(json1)).toEqual("animal=cat&cookie=chocolate&number=2");
      });
  });
});
