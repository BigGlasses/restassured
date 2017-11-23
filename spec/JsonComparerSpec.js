describe("JsonComparer", function() {
  var json1;
  var json2;
  var json3;

  beforeEach(function() {
    json1 = {
      animal : "cat",
      cookie : "chocolate",
      number : "2"
    }
    json2 = {
      animal : "dog",
      cookie : "chocolate",
      number : "2"
    }
    json3 = {
      animal : "dog",
      cookie : "white",
      number : "2"
    }
    json4 = {
      animal : "cat",
    }
  });

  describe("When comparing a JSON with", function() {
    describe("an Identical JSON", function() {
      it("compare returns true.", function() {
        expect(compare(json1, json1)).toEqual(true)
      });
      it("compareExact returns true.", function() {
        expect(compareExact(json1, json1)).toEqual(true)
      });
      it("compareWithTolerance returns true.", function() {
        expect(compareWithTolerance(json1, json1, 1)).toEqual(true)
      });
    });

    describe("a JSON with 1 difference", function() {
      it("compare returns false.", function() {
        expect(compare(json1, json2)).toEqual(false)
      });
      it("compareExact returns false.", function() {
        expect(compareExact(json1, json2)).toEqual(false)
      });
      it("compareWithTolerance(1) returns true.", function() {
        expect(compareWithTolerance(json1, json2, 1)).toEqual(true)
      });
    });

    describe("a JSON with 2 differences", function() {
      it("compare returns false.", function() {
        expect(compare(json1, json3)).toEqual(false)
      });
      it("compareExact returns false.", function() {
        expect(compareExact(json1, json3)).toEqual(false)
      });
      it("compareWithTolerance(1) returns false.", function() {
        expect(compareWithTolerance(json1, json3, 1)).toEqual(false)
      });
    });
    describe("a JSON that is a subset", function() {
      it("compare returns true.", function() {
        expect(compare(json1, json4)).toEqual(true)
      });
      it("compareExact returns false.", function() {
        expect(compareExact(json1, json4)).toEqual(false)
      });
      it("compareWithTolerance(1) returns true.", function() {
        expect(compareWithTolerance(json1, json4, 1)).toEqual(true)
      });
    });

  });
});
