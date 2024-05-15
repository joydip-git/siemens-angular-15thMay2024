import { EmployeeRepository } from "../data/repository";
import { Employee } from "../models/employee";
import { ManagerContract } from "./manager-contract";

export class EmployeeManager implements ManagerContract<Employee> {
    // private readonly _repository: EmployeeRepository;
    // constructor(_repository: EmployeeRepository) {
    //     this._repository = _repository
    // }
    constructor(private _repository: EmployeeRepository) {

    }
    add(e: Employee): boolean {
        const index = this._repository.employees.findIndex((emp) => e.id === emp.id)
        if (index == -1) {
            this._repository.employees.push(e)
            return true
        }
        return false
    }
    update(id: number, e: Employee): boolean {
        return false
    }
    delete(id: number): boolean {
        const index = this._repository.employees.findIndex((e) => e.id === id)
        if (index !== -1) {
            this._repository.employees.splice(index, 1)
            return true
        }
        return false
    }
    fetchAll(): Employee[] | undefined {
        return [...this._repository.employees]
    }
    fetch(id: number): Employee | undefined {
        const records = this._repository.employees
        //let found: Employee | undefined = undefined;
        // for (const e of records) {
        //     if (e.id === id) {
        //         found = e;
        //         break;
        //     }
        // }
        return records.find((e) => e.id === id)
    }

}