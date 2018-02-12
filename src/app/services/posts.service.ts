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

 getPost(id):Observable<Post>{
  return this.http.get<Post>(`${this.postsUrl}/${id}`)
}

 sendPost(post: Post):Observable<Post>{
   return this.http.post<Post>(this.postsUrl,post,HttpOptions)
 }

 updatePost(post: Post):Observable<Post>{
   const url = `${this.postsUrl}/${post.id}`
   return this.http.put<Post>(url,post,HttpOptions)
 }

 removePost(post: Post | number):Observable<Post>{
  const id = typeof post === 'number' ? post : post.id
  const url = `${this.postsUrl}/${id}`
  return this.http.put<Post>(url,HttpOptions)
 }

}
