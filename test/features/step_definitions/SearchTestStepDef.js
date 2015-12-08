var assert = require('assert');

var addBookmarkTest = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^my homework web$/,{timeout:20*1000} , function() {
        var promise = this.driver.get('http://baidu.com');
        this.driver.sleep(1000);
        return promise;
    });

    this.When(/^I inputs "([^"]*)"$/, function (text) {
        var promise = this.driver
            .findElement({id: 'input'})
            .sendKeys(text);
        return promise;
    });

    this.Then(/^there is (\d+) bookmarks found/, function (itemNumber, next) {
        this.driver.sleep(1000);
        this.driver.findElements({className: 'bookmarkName'}).
            then(function(elements) {
                assert.equal(elements.length, itemNumber);
                next();
            });
    });
};

module.exports = addBookmarkTest;
