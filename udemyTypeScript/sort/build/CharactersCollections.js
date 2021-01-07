"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
var Sorter_1 = require("./Sorter");
var CharactersCollections = /** @class */ (function (_super) {
    __extends(CharactersCollections, _super);
    function CharactersCollections(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        ;
        return _this;
    }
    CharactersCollections.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    Object.defineProperty(CharactersCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollections.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split('');
        var leftHand = this.data[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    };
    return CharactersCollections;
}(Sorter_1.Sorter));
exports.CharactersCollections = CharactersCollections;
