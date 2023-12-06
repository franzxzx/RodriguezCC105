import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm= new FormGroup({
  username: new FormControl('',Validators.required),
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('', Validators.required),
  confirmpassword: new FormControl('', Validators.required)
},
{
})
constructor(private fb: FormBuilder, private router: Router){}

get username(){
  return this.registerForm.get('username');
}
get email(){
  return this.registerForm.get('email');
}
get password(){
  return this.registerForm.get('password');
}
get confirmpassword(){
  return this.registerForm.get('confirmpassword'); }

submit(){
  if(!this.registerForm.valid){
    return;
}
const {username, email, password} = this.registerForm.value; 
if(username && email && password){ 
}
}
}
