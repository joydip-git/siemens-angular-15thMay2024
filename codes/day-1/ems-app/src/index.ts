import { EmployeeRepository } from "./data/repository";
import { EmployeeManager } from "./manager/employee-manager";
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";

const repo = EmployeeRepository.create()
const manager = new EmployeeManager(repo)
console.log(manager.add(new Developer(1, 'john', 1000, 1000, 1000, 1000)))
console.log(manager.add(new Hr(2, 'sunil', 2000, 2000, 1000, 1000)))

manager.fetchAll()?.forEach(e => console.log(e.name))