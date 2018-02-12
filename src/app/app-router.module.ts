import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes=[
  {path:'',component: HomeComponent},
  {path:'users',component: UsersComponent},
  {path:'posts',component: PostsComponent},
  {path:'posts/:id',component: PostComponent},
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
