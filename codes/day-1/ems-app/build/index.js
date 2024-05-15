define(["require", "exports", "./data/repository", "./manager/employee-manager", "./models/developer", "./models/hr"], function (require, exports, repository_1, employee_manager_1, developer_1, hr_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    var repo = repository_1.EmployeeRepository.create();
    var manager = new employee_manager_1.EmployeeManager(repo);
    console.log(manager.add(new developer_1.Developer(1, 'john', 1000, 1000, 1000, 1000)));
    console.log(manager.add(new hr_1.Hr(2, 'sunil', 2000, 2000, 1000, 1000)));
    (_a = manager.fetchAll()) === null || _a === void 0 ? void 0 : _a.forEach(function (e) { return console.log(e.name); });
});
