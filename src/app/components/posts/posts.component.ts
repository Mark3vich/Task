import { Component } from '@angular/core';
import { PostData } from 'src/app/shared/models/postData.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public postsData: any = [];
  constructor(private posts: PostsService) {
    this.getPostsData();
  }

  public getPostsData() { 
    this.posts.getPosts().subscribe((data: PostData) => {
      this.postsData = data;
    });
  }
}
