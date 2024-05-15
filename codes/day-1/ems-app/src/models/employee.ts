export class Employee {
    // id: number;
    // name: string;
    // basicPay: number;
    // daPay: number;
    // hraPay: number;

    constructor(public id: number, public name: string, public basicPay: number, public daPay: number, public hraPay: number) {
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
    calculateSalary(): number {
        return this.basicPay + this.daPay + this.hraPay
    }
}