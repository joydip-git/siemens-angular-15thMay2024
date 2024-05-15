export interface ManagerContract<T> {
    add(e: T): boolean;
    update(id: number, e: T): boolean;
    delete(id: number): boolean;
    fetchAll(): T[] | undefined;
    fetch(id: number): T | undefined;
}