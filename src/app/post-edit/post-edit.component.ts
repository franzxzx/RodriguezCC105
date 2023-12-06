import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxValidator } from '@angular/forms';
import { PostService  } from '../post.service';
import { Post } from '../post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number= 0;
  editMode = false;
  constructor(private postService: PostService, private router: Router, private actRoute: ActivatedRoute, private backendservice: BackEndService) { }

  ngOnInit(): void {
    let edittitle= '';
    let editdescription= '';
    let editimagePath ='';
    this.actRoute.params.subscribe((params: Params)=>{
      if(params['index']){
        console.log(params['index']);
        this.index= params['index']

        const post = this.postService.getSpecPost(this.index);

        edittitle = post.title;
        editdescription = post.description;
        editimagePath = post.imagePath;

        this.editMode = true
      }
    }
    );
    this.form = new FormGroup({
      title: new FormControl(edittitle, [Validators.required]),
      imagePath: new FormControl(editimagePath, [Validators.required]),
      description: new FormControl(editdescription, [Validators.required])
  })
}
  onSubmit() {
    const title = this.form.value.title;
    const imagePath = this.form.value.imagePath;
    const description = this.form.value.description;
    const author = this.form.value.author;
    const numberOfLikes = this.form.value.numberOfLikes;
    const comments = this.form.value.comments;

    const post: Post = new Post(
      title, imagePath, description,'', new Date(),1,[]
    );
    if(this.editMode == true){
      this.postService.updatePost(this.index, post)
      this.backendservice.saveData();
      alert("Post Edited");
    }
    else {
      this.postService.addPost(post);
      this.backendservice.saveData();
      alert("Post Added");
    }

    this.router.navigate(['post-list']);
  }
}