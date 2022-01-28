import { Injectable } from "@angular/core";
import { Post } from "../models/post";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    postList: Array<Post> = [
        { id: 1, post: "purple" },
        { id: 2, post: "red" },
        { id: 3, post: "green" },
        { id: 4, post: "yellow" },
        { id: 5, post: "orange" },
    ];

    saveData(data: Post) {
        this.postList.push(data)
    }

}