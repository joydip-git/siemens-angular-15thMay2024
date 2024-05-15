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
define(["require", "exports", "./employee"], function (require, exports, employee_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hr = void 0;
    var Hr = /** @class */ (function (_super) {
        __extends(Hr, _super);
        function Hr(id, name, basicPay, daPay, hraPay, gratuityPay) {
            var _this = _super.call(this, id, name, basicPay, daPay, hraPay) || this;
            _this.gratuityPay = gratuityPay;
            return _this;
        }
        Hr.prototype.calculateSalary = function () {
            return _super.prototype.calculateSalary.call(this) + this.gratuityPay;
        };
        return Hr;
    }(employee_1.Employee));
    exports.Hr = Hr;
});
