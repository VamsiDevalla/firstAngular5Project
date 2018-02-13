import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsFormComponent } from './components/posts-form/posts-form.component';
import { AppRouterModule } from './/app-router.module';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthComponent } from './components/auth/auth.component';
import { LogoutComponent } from './components/logout/logout.component';

import { AuthGuardGuard } from './guards/auth-guard.guard';

import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostsFormComponent,
    HomeComponent,
    PostComponent,
    NotFoundComponent,
    AuthComponent,
    SignUpComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
  ],
  providers: [UsersService, PostsService, AuthGuardGuard, AuthService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
