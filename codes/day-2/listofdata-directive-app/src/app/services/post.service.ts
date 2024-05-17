import { postRecords } from "../data/postrecords";
import { Observable, map, of } from "rxjs";
import { Post } from "../models/post";
import { ServiceContract } from "./service-contract";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SERVICE_BASE_URL } from "../config/constants";

// @Injectable({
//     providedIn: 'root'
// })
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
        //const observableOfPosts: Observable<Post[]> = of([...postRecords])
        const observableOfPosts: Observable<Post[]> = this.http.get<Post[]>(SERVICE_BASE_URL)
        /*
        const obs: Observable<any> = this.http.get(SERVICE_BASE_URL)
        const observableOfPosts: Observable<Post[]> =
            obs
                .pipe(
                    map(
                        (jsonArray: any) => {
                            return jsonArray.map(
                                (jsonObj: any): Post => {
                                    return {
                                        id: jsonObj.id,
                                        userId: jsonObj.userId,
                                        title: jsonObj.title,
                                        body: jsonObj.body
                                    }
                                }
                            )
                        }
                    )
                )

        */
        return observableOfPosts
    }
}