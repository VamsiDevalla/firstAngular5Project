import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {User} from '../models/Auth'
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private route:Router,private cookies: CookieService) { }
 login(user:User){
   this.http.post<any>("http://localhost:2000/login",user).subscribe(data=>{
    if(data.loggedIn==true) {
      this.cookies.set('loggedIn', data.loggedIn);
      this.cookies.set('m_token', data.token);
      this.route.navigate(['/posts'])
    } else {
      this.route.navigate(['/login']);
    }  
  })
 }

 checkLogin() {
  return this.cookies.get('loggedIn');
}

fetchToken() {
  return this.cookies.get('m_token');
}

deleteCookie(){
  //  this.cookies.delete('loggedIn');
   this.cookies.deleteAll();
   this.route.navigate(['/login'])
}

 signup(user:User):Observable<User>{
   return this.http.post<User>("http://localhost:2000/signup",user)
 }
}
