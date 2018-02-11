import { Component, OnInit,ViewChild } from '@angular/core'
import { User } from '../../models/User'

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
  constructor() { }

  ngOnInit() {
    this.showUserForm = false
    this.users=[
      {
        firstName: 'Vamsi',
        lastName: 'Devalla',
        age: 24,
        address: {
          street: '62 rutgers rd',
          city: 'Piscataway',
          state: 'NJ'
        },
        image:"http://lorempixel.com/300/300/people/1",
        isActive: true,
        balance: 400,
        showExtended: false,
        joined: new Date('01/02/2015 08:30:00'),
      },
      {
        firstName: 'Sushmitha',
        lastName: 'Patlolla',
        address: {
          street: '62 rutgers rd',
          city: 'Piscataway',
          state: 'NJ'
        },
        image:"http://lorempixel.com/600/600/people/2",
        isActive: false,
        balance: 500,
        joined: new Date('01/04/2016 07:30:00'),
        showExtended: false,
      },
      {
        firstName: 'Prakash',
        lastName: 'Mekonda',
        age: 23,
        address: {
          street: '62 rutgers rd',
          city: 'Piscataway',
          state: 'NJ'
        },
        image:"http://lorempixel.com/600/600/people/3",
        isActive: true,
        balance: 100,
        joined: new Date('01/02/1994 09:45:00'),
        showExtended: false,
      },
      {
        firstName: 'Vamshi',
        lastName: 'Girikala',
        age: 23,
        address: {
          street: '62 rutgers rd',
          city:"Piscataway",
          state: 'NJ',
          
        },
        showExtended: false,
        //image:"http://lorempixel.com/600/600/people/4",
        isActive: true,
      }
    ]
    // this.addUser(
    //   {
        // firstName: 'Vamshi',
        // lastName: 'Girikala',
        // age: 23,
        // address: {
        //   street: '62 rutgers rd',
        //   city:"Piscataway",
        //   state: 'NJ'
    //     }
    //   }
    // )
    this.addClasses()
  }
  addUser(user:User){
    this.users.push(user)
  }
  addClasses(){
    this.currentClasses= {
      'card-header':this.enabled,
      //'big-text': true,
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
      this.users.unshift(value);
      this.form.reset();
    }
  }

}
