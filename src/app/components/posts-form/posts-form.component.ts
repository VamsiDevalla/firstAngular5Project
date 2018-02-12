import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService} from '../../services/posts.service'
import { Post } from '../../models/Post'

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {
 @ViewChild('postForm') form : any
 post: Post = {
   title:"",
   body: "",
 }
  constructor(private PostsService: PostsService) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: Post, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      this.PostsService.sendPost(value).subscribe(post =>{
        console.log(post)
      });
      this.form.reset();
    }
  }

}
