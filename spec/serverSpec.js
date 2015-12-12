var request = require("request");

describe("bookmark server", function() {
    describe("GET /api/bookmarks/number", function() {
      it("returns bookmarks number in json", function(done) {
          request.get("http://localhost:8080/api/bookmarks/number", function(error, res, body) {
              var data = JSON.parse(body);
              expect(data.bookmarkNumber).toMatch(72);
              done();
          });
      });
    });

    describe("GET /api/bookmarks", function() {
        it("returns bookmarks number in json", function(done) {
            request.get("http://localhost:8080/api/bookmarks", function(error, res, body) {
                var bookmarks = JSON.parse(body);
                //expect(bookmarks).toBe(10);
                done();
            });
        });
    });
});