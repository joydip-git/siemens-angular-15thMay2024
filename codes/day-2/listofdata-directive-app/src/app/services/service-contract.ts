import { Observable } from "rxjs";

export interface ServiceContract<T> {
    getAll(): Observable<T[]>;
    get(id: number): Observable<T>;
    add(obj: T): Observable<T>;
    update(id: number, obj: T): Observable<T>;
    delete(id: number): Observable<T>;
}