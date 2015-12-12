var assert = require('assert');

var searchBookmarkTest = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^homepage opened for add test$/,{timeout:20*1000} , function() {
        var promise = this.driver.get('http://localhost:8080/page');
        return promise;
    });

    this.Given(/^add button clicked$/, function() {
        var promise = this.driver.findElement({id: 'addButton'}).click();
        this.driver.sleep(1000);
        return promise;
    });

    this.When(/^fill in the form with "([^"]*)" and "([^"]*)"$/, function (bookmarkName, bookmarkAddress) {
        this.driver
            .findElement({id: 'newBookmarkName'})
            .sendKeys(bookmarkName);
        this.driver
            .findElement({id: 'newBookmarkAddress'})
            .sendKeys(bookmarkAddress);
        var promise = this.driver.findElement({id: 'addConfirmButton'}).click();
        this.driver.sleep(1000);
        return promise;
    });


    this.Then(/^(\d+) bookmarks found after add$/, function (itemNumber) {
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
