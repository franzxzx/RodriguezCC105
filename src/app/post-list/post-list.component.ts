import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { BackEndService } from '../back-end.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() post?:Post;

  listOfPosts: Post[]=[];
  constructor(
    private postService: PostService,
    private backEndService : BackEndService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.backEndService.fetchData().subscribe((posts) => {
      this.listOfPosts=posts;
    });
}
logout(){{
    this.router.navigate(['login']);
  };
}
}