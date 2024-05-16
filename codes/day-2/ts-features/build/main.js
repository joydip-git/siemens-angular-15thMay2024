"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function test() {
    return false;
}
function invoke(fnRef, a, b) {
}
function add(a, b) {
    return a + b;
}
invoke(add, 12, 3);
var empType = {
    id: 1,
    name: 'joy',
    salary: 1000
};
var people = [empType];
var products = [];
var keyValuePairs = [
    {
        "prop1": 100
    }
];
var Color;
(function (Color) {
    Color[Color["black"] = 0] = "black";
    Color[Color["blue"] = 1] = "blue";
})(Color || (Color = {}));
var color = Color.black;
var DataReader = /** @class */ (function () {
    function DataReader() {
    }
    return DataReader;
}());
var FileDataReader = /** @class */ (function (_super) {
    __extends(FileDataReader, _super);
    function FileDataReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileDataReader.prototype.readData = function () {
        return "";
    };
    return FileDataReader;
}(DataReader));
