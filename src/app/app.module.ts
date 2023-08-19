import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';

import { PostsService } from './shared/services/posts.service';
import { HeaderActiveService } from './shared/services/headerActive.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostsService, HeaderActiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
