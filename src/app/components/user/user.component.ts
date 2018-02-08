import {Component,OnInit} from "@angular/core"
import {User} from "../../models/User"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // template:'<h3>Welcome custom component</h3>',
  // styles:[`
  //     h2{
  //         color:red
  //     }
  // `],
})

export class UserComponent {
  //properties
  user: User

  //mothods
  constructor() {
    
  }
  ngOnInit() {
    this.user = {
      firstName: 'Vamsi',
      lastName: 'Devalla',
      age: 24,
      address: {
        street: '62 rutgers rd',
        city: 'Piscataway',
        state: 'NJ'
      }
    }
  }

}
