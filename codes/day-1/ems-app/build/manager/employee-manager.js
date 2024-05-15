var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmployeeManager = void 0;
    var EmployeeManager = /** @class */ (function () {
        // private readonly _repository: EmployeeRepository;
        // constructor(_repository: EmployeeRepository) {
        //     this._repository = _repository
        // }
        function EmployeeManager(_repository) {
            this._repository = _repository;
        }
        EmployeeManager.prototype.add = function (e) {
            var index = this._repository.employees.findIndex(function (emp) { return e.id === emp.id; });
            if (index == -1) {
                this._repository.employees.push(e);
                return true;
            }
            return false;
        };
        EmployeeManager.prototype.update = function (id, e) {
            return false;
        };
        EmployeeManager.prototype.delete = function (id) {
            var index = this._repository.employees.findIndex(function (e) { return e.id === id; });
            if (index !== -1) {
                this._repository.employees.splice(index, 1);
                return true;
            }
            return false;
        };
        EmployeeManager.prototype.fetchAll = function () {
            return __spreadArray([], this._repository.employees, true);
        };
        EmployeeManager.prototype.fetch = function (id) {
            var records = this._repository.employees;
            //let found: Employee | undefined = undefined;
            // for (const e of records) {
            //     if (e.id === id) {
            //         found = e;
            //         break;
            //     }
            // }
            return records.find(function (e) { return e.id === id; });
        };
        return EmployeeManager;
    }());
    exports.EmployeeManager = EmployeeManager;
});
