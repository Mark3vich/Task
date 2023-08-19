import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostData } from 'src/app/shared/models/postData.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  public postsData: any = [];
  public id: string = "";

  constructor(private post: PostsService, private activatedRoute: ActivatedRoute) {
    this.getPostData();
  }

  protected getParamUrl(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  public getPostData() {
    this.getParamUrl(); 
    this.post.getPost(this.id).subscribe((data: PostData) => {
      this.postsData = data;
    });
  }
}
