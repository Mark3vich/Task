import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { syncEnterGuard } from './guards/sync-enter.guard';

const routes: Routes = [
  { path: '',                   redirectTo: 'authorization', pathMatch: 'full' },
  { path: 'authorization',      component:  AuthorizationComponent },  
  { path: 'posts',              component:  PostsComponent, canActivate: [syncEnterGuard]}, 
  { path: 'posts/:id',          component:  PostComponent,  canActivate: [syncEnterGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
