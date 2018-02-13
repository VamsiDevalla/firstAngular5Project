import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersService } from './services/users.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { PostsFormComponent } from './components/posts-form/posts-form.component';
import { AppRouterModule } from './/app-router.module';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';

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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
  ],
  providers: [UsersService, PostsService, AuthGuardGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
