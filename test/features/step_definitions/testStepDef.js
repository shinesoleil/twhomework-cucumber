var assert = require('assert');

var searchBookmarkTest = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^my homework web page$/,{timeout:20*1000} , function() {
        var promise = this.driver.get('http://localhost:8080/page');
        this.driver.sleep(1000);
        return promise;
    });

    this.When(/^I input "([^"]*)"$/, function (text) {
        var promise = this.driver
            .findElement({id: 'input'})
            .sendKeys(text);
        return promise;
    });

    this.Then(/^there are (\d+) bookmarks found/, function (itemNumber, next) {
        this.driver.sleep(1000);
        this.driver.findElements({className: 'bookmarkName'}).
            then(function(elements) {
                assert.equal(elements.length, itemNumber);
                next();
            });
    });
};

module.exports = searchBookmarkTest;
