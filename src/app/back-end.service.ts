import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private postService: PostService, private http: HttpClient) { }


  saveData(){
    const listOfPost: Post[] = this.postService.getPost();
    this.http.put('https://cc105-b-default-rtdb.asia-southeast1.firebasedatabase.app/post.json',listOfPost)
    .subscribe((res)=>{console.log(res);})
  }
  fetchData(){
    return this.http.get<Post[]>('https://cc105-b-default-rtdb.asia-southeast1.firebasedatabase.app/post.json').pipe(
    tap((newlistofPost: Post[]) => {
    console.log(newlistofPost);
    this.postService.setPosts(newlistofPost);
    })
    );
}}