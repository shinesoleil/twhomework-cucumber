var assert = require('assert');

var searchBookmarkTest = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^homepage opened for delete test$/,{timeout:20*1000} , function() {
        var promise = this.driver.get('http://localhost:8080/page');
        this.driver.sleep(1000);
        return promise;
    });

    this.Given(/^one delete button clicked$/, function() {
        var promise = this.driver.findElement({className: 'deleteButton'}).click();
        this.driver.sleep(1000);
        return promise;
    });

    this.When(/^click Yes$/, function () {
        var promise = this.driver.findElement({id: 'deleteConfirmButton'}).click();
        return promise;
    });


    this.Then(/^(\d+) bookmarks found after delete$/, function (itemNumber) {
        var promise =  this.driver.findElement({id: 'resultNumber'})
            .getText()
            .then(function(text) {
                assert.equal(text.split(" ")[0], itemNumber);
            });
        this.driver.sleep(1000);
        return promise;
    });

};

module.exports = searchBookmarkTest;