import { Component, OnInit } from '@angular/core';
import { PostsService} from '../../services/posts.service'
import { Post } from '../../models/Post'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]
  isEditing: Boolean 
  currentPost: Post
  constructor(private PostsService: PostsService) { }

  ngOnInit() {
    this.PostsService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  onNewPost(post : Post){
    this.posts.unshift(post)
  }

  onUpdatedPost(post:Post){
    this.isEditing = false
    this.posts.forEach((cur,index)=>{
      if(post.id==cur.id){
        this.posts.splice(index,1)
        this.posts.unshift(post)
      }
    })
  }

  removePost(post: Post){
    if(confirm('are you sure?')){
      this.PostsService.removePost(post.id).subscribe(()=>{
        this.posts.forEach((cur,index)=>{
          if(post.id==cur.id){
            this.posts.splice(index,1)
          }
        })
      })
    }
  }

  editPost(post: Post){
    this.currentPost = post
    this.isEditing = true
  }

}
