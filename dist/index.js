"use strict";
exports.__esModule = true;
var bg_utils_1 = require("@brightsole/bg-utils");
var CardPile = /** @class */ (function () {
    function CardPile(cards) {
        var _this = this;
        this.resetCards = function (cards) {
            cards.forEach(function (card) {
                if (card && typeof card.reset === 'function')
                    card.reset();
            });
        };
        this.draw = function (count) {
            var drawnCards = _this.cards.slice(0, count);
            _this.cards = _this.cards.slice(count);
            return drawnCards;
        };
        this.drawFromBottom = function (count) {
            var index = _this.cards.length - count;
            var drawnCards = _this.cards.slice(index);
            _this.cards = _this.cards.slice(0, index);
            return drawnCards;
        };
        this.drawRandomly = function (count) {
            var indices = Array.from(Array(_this.cards.length)).map(function (_, i) { return i; });
            var randomIndices = bg_utils_1.selectUniqueRandoms({
                arrayToSelectFrom: indices,
                numberToSelect: count
            });
            var cards = _this.cards.filter(function (_, i) { return randomIndices.includes(i); });
            var remainder = _this.cards.filter(function (_, i) { return !randomIndices.includes(i); });
            _this.cards = remainder;
            return cards;
        };
        this.cardsRemainingCount = function () {
            return _this.cards.length;
        };
        this.shuffle = function () {
            _this.cards = bg_utils_1.shuffle(_this.cards);
        };
        this.returnAndShuffle = function (cards) {
            _this.resetCards(cards);
            _this.cards = bg_utils_1.shuffle(_this.cards.concat(cards));
        };
        this.returnToTop = function (cards) {
            _this.resetCards(cards);
            _this.cards = cards.concat(_this.cards);
        };
        this.returnToBottom = function (cards) {
            _this.resetCards(cards);
            _this.cards = _this.cards.concat(cards);
        };
        this.cards = cards;
    }
    return CardPile;
}());
exports["default"] = CardPile;
