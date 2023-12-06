import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginform=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('', Validators.required)
  });
  constructor(private fb: FormBuilder, private router:Router) {}
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
        
        ;
      }
    }
  }
}