describe("ProfileStore", function() {
  var pf;

  beforeEach(function() {
    pf = new ProfileStore()
  });

  describe("When creating a ProfileStore", function() {
      it("it should be empty.", function() {
        expect(pf.allRestStubs).toEqual([])
        expect(pf.allRestChains).toEqual([])
        expect(pf.allIdentifiers).toEqual([])
        expect(pf.allProfiles).toEqual([])
      });
  });

  describe("After creating a RestChain", function() {
      var chainId;
      beforeEach(function() {
        pf = new ProfileStore()
        chainId = pf.newRestChain()
      });
      var testId;
      describe("and after creating a RestStub", function() {
        beforeEach(function() {
          testId = pf.newRestStub()
        });

        it(", the RestStub can be copied.", function() {
          pf.copyRestStub(testId);
          expect(pf.allRestStubs.length).toEqual(2)
        });

        it("it can add RestStubs to the RestChain.", function() {
          pf.allRestChains[0].addTest(testId)
          expect(pf.allRestChains[0].reststublist.length).toEqual(1)
        });

        it("it can remove RestStubs from the RestChain.", function() {
          pf.allRestChains[0].addTest(testId)
          pf.deleteRestStub(testId)
          expect(pf.allRestChains[0].reststublist.length).toEqual(0)
        });
      });

        it(", the RestChain can be removed.", function() {
          pf.deleteRestChain(pf.allRestChains[0].identifier)
          expect(pf.allRestChains.length).toEqual(0)
        });

        it(", the RestChain can be copied.", function() {
          pf.copyRestChain(chainId);
          expect(pf.allRestChains.length).toEqual(2)
        });
  });
});
