var chai = require("chai");
var expect = require("chai").expect;
var word = require('../src/functions');

describe('Sentence Breaker',function() {
    it('breaks sentences into individual words',function() {
        var sInputWord = "Wolverine loves Sydney";
        var aOutputWord = word.SplitWords(sInputWord);
        expect(aOutputWord).to.be.instanceof(Array);
        expect(aOutputWord).to.deep.equal(['Wolverine', 'loves', 'Sydney']);
    });
});