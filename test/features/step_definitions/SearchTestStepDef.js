var assert = require('assert');

var addBookmarkTest = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^my homework web page$/,{timeout:20*1000} , function() {
        var promise = this.driver.get('http://localhost:8080/page');
        return promise;
    });


    this.When(/^I input "([^"]*)"$/, function (text) {
        var promise = this.driver
            .findElement({id: 'input'})
            .sendKeys(text);
        this.driver.sleep(2000);
        return promise;
    });

    this.Then(/^there are (\d+) bookmarks found$/, function (itemNumber) {
        var promise = this.driver.findElements({className: 'bookmarkName'}).
            then(function(elements) {
                console.log(elements.length);
                assert.equal(elements.length, itemNumber);

            });
        return promise;
    });

};

module.exports = addBookmarkTest;
