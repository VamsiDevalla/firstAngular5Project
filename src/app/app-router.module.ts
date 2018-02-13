import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes=[
  {path:'',component: HomeComponent},
  {path:'signup',component: SignUpComponent},
  {path:'login',component: AuthComponent},
  {path:'users',component: UsersComponent},
  {path:'posts',component: PostsComponent,canActivate:[AuthGuardGuard]},
  {path:'posts/:id',component: PostComponent,canActivate:[AuthGuardGuard]},
  {path:'**',component: NotFoundComponent},
]
@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRouterModule { }
