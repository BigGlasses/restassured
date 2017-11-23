describe("RestChain", function() {
  var rstChain;

  beforeEach(function() {
    rstChain = new RestChain()
  });


  describe("When creating a RestChain", function() {
    it("it should be empty.", function() {
      expect(rstChain.reststublist).toEqual([])
    });
    it("it should be a copy of data if entered.", function() {
      rstChain.identifier = "Dogs"
      var newRst = new RestChain(rstChain.toJson())
      expect(newRst.identifier).toEqual(rstChain.identifier)
    });
  });

  describe("When modifying the list", function() {

    beforeEach(function() {
      rstChain = new RestChain()
    });

    it("you can add tests to the chain.", function() {
      rstChain.addTest("dog");
      expect(rstChain.reststublist[0]).toEqual("dog")
      rstChain.addTest("cat");
      expect(rstChain.reststublist[1]).toEqual("cat")
    });

    it("you can remove tests from the chain.", function() {
      rstChain.addTest("dog");
      rstChain.addTest("cat");
      rstChain.removeTest("dog")
      expect(rstChain.reststublist[0]).toEqual("cat")
    });

    it("you can change positions of tests in the chain.", function() {
      rstChain.addTest("dog");
      rstChain.addTest("cat");
      rstChain.addTest("fish");
      rstChain.moveTest("dog", 1)
      expect(rstChain.reststublist[0]).toEqual("cat")
      expect(rstChain.reststublist[1]).toEqual("dog")
    });
  });


});
