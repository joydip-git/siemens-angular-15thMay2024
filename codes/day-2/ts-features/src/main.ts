type myType = boolean | undefined | null;

function test(): myType {
    return false
}

type fnType = (x: number, y: number, z?: number) => number

function invoke(fnRef: fnType, a: number, b: number) {

}

function add(a: number, b: number): number {
    return a + b
}

invoke(add, 12, 3)

type employeeType = {
    id: number,
    name: string,
    salary: number,
    isPermanant?: boolean
}

const empType: employeeType = {
    id: 1,
    name: 'joy',
    salary: 1000
}
const people: employeeType[] = [empType]

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = []

interface KeyValueCollection {
    [key: string]: any;
}

const keyValuePairs: KeyValueCollection[] = [
    {
        "prop1": 100
    }
]

enum Color {
    black,
    blue
}

const color = Color.black

abstract class DataReader {
    abstract readData(): string;
}

class FileDataReader extends DataReader {
    readData(): string {
        return ""
    }
}