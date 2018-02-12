import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from "../models/Post"
import { Observable } from 'rxjs/Observable';

const HttpOptions = {
 headers : new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable()
export class PostsService {
  postsUrl = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http : HttpClient) { }
 getPosts():Observable<Post[]>{
   return this.http.get<Post[]>(this.postsUrl)
 }

 sendPost(post: Post):Observable<Post>{
   return this.http.post<Post>(this.postsUrl,post,HttpOptions)
 }

}
