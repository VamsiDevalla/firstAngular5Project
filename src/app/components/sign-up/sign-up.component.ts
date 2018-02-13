import { Component, OnInit,ViewChild } from '@angular/core'
import {User} from '../../models/Auth'
import {AuthService} from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
@ViewChild('signUpForm') form :any
user: User
  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit() {
    this.user = {
      Username:"",
      Password:"",
    }
  }

  signUp({value,valid}:{value:User,valid:boolean}){
    if(valid){
      this.auth.signup(value).subscribe(user =>{
        this.route.navigate(['/login'])
      })
    }else{
      this.route.navigate(['/signup'])
    }
  }

}
