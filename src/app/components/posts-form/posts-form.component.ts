import { Component, OnInit, ViewChild,EventEmitter,Output,Input } from '@angular/core';
import { PostsService} from '../../services/posts.service'
import { Post } from '../../models/Post'

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {
 @ViewChild('postForm') form : any
 @Input() post: Post
 @Input() isEditing: boolean = false
 @Output() newPost: EventEmitter<Post> = new EventEmitter()
 @Output() updatedPost: EventEmitter<Post> = new EventEmitter()
  constructor(private PostsService: PostsService) { }

  ngOnInit() {
    this.post = {
      id:0,
      title:"",
      body: "",
    }
  }
  onSubmit({value, valid}: {value: Post, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      this.PostsService.sendPost(value).subscribe(post =>{
        this.newPost.emit(post)
      });
      this.form.reset();
    }
  }
  onEdit({value, valid}: {value: Post, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      this.PostsService.updatePost(value).subscribe(post =>{
        this.isEditing = false
        this.updatedPost.emit(post)
        this.form.reset()
      });
      
    }
  }

}
