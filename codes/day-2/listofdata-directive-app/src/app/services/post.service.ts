import { postRecords } from "../data/postrecords";
import { Observable, of } from "rxjs";
import { Post } from "../models/post";

export class PostService {
    getPosts(): Observable<Post[]> {
        return of([...postRecords])
    }
}