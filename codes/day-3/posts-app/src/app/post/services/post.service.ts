import { Observable, map, of } from "rxjs";
import { Post } from "../models/post";
import { ServiceContract } from "./service-contract";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SERVICE_BASE_URL } from "../../config/constants";

@Injectable()
export class PostService implements ServiceContract<Post> {

    constructor(private http: HttpClient) {

    }
    add(obj: Post): Observable<Post> {
        return this.http.post<Post>(SERVICE_BASE_URL, obj)
    }
    update(id: number, obj: Post): Observable<Post> {
        return this.http.put<Post>(`${SERVICE_BASE_URL}/${id}`, obj)
    }
    delete(id: number): Observable<Post> {
        return this.http.delete<Post>(`${SERVICE_BASE_URL}/${id}`)
    }
    get(id: number): Observable<Post> {
        return this.http.get<Post>(`${SERVICE_BASE_URL}/${id}`)
    }

    getAll(): Observable<Post[]> {
        return this.http.get<Post[]>(SERVICE_BASE_URL)
    }
}