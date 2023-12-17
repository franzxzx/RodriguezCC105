import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Import AuthService at the top of your file

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginform=new UntypedFormGroup({
    email:new UntypedFormControl('',[Validators.required, Validators.email]),
    password:new UntypedFormControl('', Validators.required)
  });
  constructor(private fb: UntypedFormBuilder, private router:Router, private authService: AuthService) {}
  get email(){
    return this.loginform.get('password');
  }

  submit(){
    if(!this.loginform.valid){
      return;
    }
    const emailControl = this.loginform.get('email');
    const passwordControl =this.loginform.get('password');
  
    if (emailControl && passwordControl){
      const email = emailControl.value;
      const password = passwordControl.value;
  
      if(email && password){
        this.authService.login(email, password).subscribe(() => {
          this.router.navigate(['/post-add']);
        });
      }
    }
    
  }
}