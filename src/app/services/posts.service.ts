import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from "../models/Post"
import { Observable } from 'rxjs/Observable';

const HttpOptions = {
 headers : new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable()
export class PostsService {
  postsUrl = "http://localhost:2000/posts"
  constructor(private http : HttpClient) { }
 getPosts():Observable<Post[]>{
   return this.http.get<Post[]>(this.postsUrl)
 }

 getPost(id:string):Observable<Post>{
  return this.http.get<Post>(`${this.postsUrl}/${id}`)
}

 sendPost(post: Post):Observable<Post>{
   return this.http.post<Post>(this.postsUrl,post,HttpOptions)
 }

 updatePost(post: Post):Observable<Post>{
   const url = `${this.postsUrl}/${post._id}`
   return this.http.put<Post>(url,post,HttpOptions)
 }

 removePost(post: Post ):Observable<{flag:string}>{
  const url = `${this.postsUrl}/${post._id}`
  return this.http.delete<{flag:string}>(url,HttpOptions)
 }

}
