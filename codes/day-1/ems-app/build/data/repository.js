//var arr = new Array(1, 2, 3, 4)
//var arr = [1, 2, 3, 4]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmployeeRepository = void 0;
    //export const employees: Employee[] = []
    var EmployeeRepository = /** @class */ (function () {
        function EmployeeRepository() {
            this._employees = [];
        }
        EmployeeRepository.create = function () {
            if (this._repository === undefined)
                this._repository = new EmployeeRepository();
            return this._repository;
        };
        Object.defineProperty(EmployeeRepository.prototype, "employees", {
            get: function () {
                return this._employees;
            },
            enumerable: false,
            configurable: true
        });
        return EmployeeRepository;
    }());
    exports.EmployeeRepository = EmployeeRepository;
});
