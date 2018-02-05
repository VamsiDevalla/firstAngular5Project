import { Component, OnInit } from '@angular/core'
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  loaded: boolean = true
  showExtended: boolean = true
  constructor() { }

  ngOnInit() {
    this.users=[
      // {
      //   firstName: 'Vamsi',
      //   lastName: 'Devalla',
      //   age: 24,
      //   address: {
      //     street: '62 rutgers rd',
      //     city: 'Piscataway',
      //     state: 'NJ'
      //   }
      // },
      // {
      //   firstName: 'Sushmitha',
      //   lastName: 'Patlolla',
      //   address: {
      //     street: '62 rutgers rd',
      //     city: 'Piscataway',
      //     state: 'NJ'
      //   }
      // },
      // {
      //   firstName: 'Prakash',
      //   lastName: 'Mekonda',
      //   age: 23,
      //   address: {
      //     street: '62 rutgers rd',
      //     city: 'Piscataway',
      //     state: 'NJ'
      //   }
      // }
    ]
    // this.addUser(
    //   {
    //     firstName: 'Vamshi',
    //     lastName: 'Girikala',
    //     age: 23,
    //     address: {
    //       street: '62 rutgers rd'
    //     }
    //   }
    // )
  }
  addUser(user:User){
    this.users.push(user)
  }
}
