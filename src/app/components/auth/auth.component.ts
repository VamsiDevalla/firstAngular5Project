import { Component, OnInit,ViewChild } from '@angular/core';
import {User} from '../../models/Auth'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
@ViewChild('loginForm') form: any
user: User

  constructor() { }

  ngOnInit() {
    this.user = {
      Username:'',
      Password:'',
    }
  }
  login({value,valid}:{value:User,valid:boolean}){
    if(valid){
      console.log(value)
    }else{
      console.log('no user found')
    }
  }

}
