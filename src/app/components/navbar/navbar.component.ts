import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean
  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit() {
    this.isLoggedIn = false
  }

  logout(){
    this.isLoggedIn = false
    this.auth.deleteCookie()
    
  }

}
