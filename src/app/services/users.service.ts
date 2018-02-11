import { Injectable } from '@angular/core'
import { User } from '../models/User'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class UsersService {
 users: User[]
  constructor() { 
    this.users = [
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
        image:"http://lorempixel.com/600/600/people/4",
        isActive: true,
      }
    ]
  }
  getUsers(): Observable<User[]>{
    return of(this.users)
  }
  setUser(user: User){
    this.users.unshift(user)
  }

}
