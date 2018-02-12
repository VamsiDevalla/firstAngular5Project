import { Component, OnInit,ViewChild } from '@angular/core'
import { User } from '../../models/User'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  loaded: boolean = true
  showUserForm: boolean
  enabled: boolean = true
  currentClasses = {}
  user: User ={
    firstName: "",
    lastName:""
  }
  @ViewChild('userForm') form: any;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.showUserForm = false
    this.usersService.getUsers().subscribe(data => {
      this.users = data
    })
    this.addClasses()
  }
  addUser(user:User){
    this.users.push(user)
  }
  addClasses(){
    this.currentClasses= {
      'card-header':this.enabled,
      'big-text': true,
    }
  }
  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      console.log(value)
      value.isActive = true;
      value.joined = new Date();
      value.showExtended = true;
      value.age = 24
      console.log(value)
      this.usersService.setUser(value);
      this.form.reset();
    }
  }

}
