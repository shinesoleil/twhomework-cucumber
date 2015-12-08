var assert = require('assert');

var searchBookmarkTest = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^homepage opened$/,{timeout:20*1000} , function() {
        var promise = this.driver.get('http://localhost:8080/page');
        this.driver.sleep(1000);
        return promise;
    });

    this.Given(/^one delete button clicked$/, function() {
        var promise = this.driver.findElement({id: 'addButton'}).click();
        this.driver.sleep(1000);
        return promise;
    });

    this.When(/^click Yes$/, function (bookmarkName, bookmarkAddress) {
        this.driver
            .findElement({id: 'newBookmarkName'})
            .sendKeys(bookmarkName);
        this.driver
            .findElement({id: 'newBookmarkAddress'})
            .sendKeys(bookmarkAddress);
        var promise = this.driver.findElement({id: 'addButton'}).click();
        return promise;
    });

    this.Then(/^bookmarks number - 1$/, function (itemNumber, next) {
        this.driver.sleep(1000);
        this.driver.findElements({className: 'bookmarkName'}).
            then(function(elements) {
                console.log(elements.length);
                next();
            });
    });
};

module.exports = searchBookmarkTest;