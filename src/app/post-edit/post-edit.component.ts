import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, MaxValidator } from '@angular/forms';
import { PostService  } from '../post.service';
import { Post } from '../post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackEndService } from '../back-end.service';
import { user } from '@angular/fire/auth/public_api';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: UntypedFormGroup;
  index: number= 0;
  editMode = false;
  constructor(private postService: PostService, private router: Router, private actRoute: ActivatedRoute, private backendservice: BackEndService, private afAuth: AngularFireAuth) { }

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
    this.form = new UntypedFormGroup({
      title: new UntypedFormControl(edittitle, [Validators.required]),
      imagePath: new UntypedFormControl(editimagePath, [Validators.required]),
      description: new UntypedFormControl(editdescription, [Validators.required])
  })
}
onSubmit() {
  const title = this.form.value.title;
  const imagePath = this.form.value.imagePath;
  const description = this.form.value.description;

  this.afAuth.user.subscribe(user => {
    if (user) {
      const author = user.email ? user.email : '';

      const post: Post = new Post(
        title, imagePath, description, author, new Date(), 1, []
      );

      if (this.editMode == true) {
        this.postService.updatePost(this.index, post);
        this.backendservice.saveData();
        alert("Post Edited");
      } else {
        this.postService.addPost(post);
        this.backendservice.saveData();
        alert("Post Added");
      }

      this.router.navigate(['post-list']);
    }
  });
}
}