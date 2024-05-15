//var arr = new Array(1, 2, 3, 4)
//var arr = [1, 2, 3, 4]

import { Employee } from "../models/employee";
//export const employees: Employee[] = []
export class EmployeeRepository {
    private _employees: Employee[];
    private static _repository: EmployeeRepository;

    private constructor() {
        this._employees = []
    }
    static create(): EmployeeRepository {
        if (this._repository === undefined)
            this._repository = new EmployeeRepository()

        return this._repository
    }
    get employees() {
        return this._employees
    }
}