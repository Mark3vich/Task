import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
    constructor(private http: HttpClient) {}

    public getPosts() {
        let url = "https://jsonplaceholder.typicode.com/posts"; 
        return this.http.get(url);
    }

    public getPost(id: string) { 
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        return this.http.get(url);
    }
}   