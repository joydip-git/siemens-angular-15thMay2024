define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Employee = void 0;
    var Employee = /** @class */ (function () {
        // id: number;
        // name: string;
        // basicPay: number;
        // daPay: number;
        // hraPay: number;
        function Employee(id, name, basicPay, daPay, hraPay) {
            this.id = id;
            this.name = name;
            this.basicPay = basicPay;
            this.daPay = daPay;
            this.hraPay = hraPay;
            // this.id = id
            // this.name = name
            // this.basicPay = basicPay
            // this.hraPay = hraPay
            // this.daPay = daPay
        }
        // get Id() {
        //     return this.id
        // }
        // set Id(val: number) {
        //     this.id = val
        // }
        Employee.prototype.calculateSalary = function () {
            return this.basicPay + this.daPay + this.hraPay;
        };
        return Employee;
    }());
    exports.Employee = Employee;
});
