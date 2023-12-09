import { Component } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm= new UntypedFormGroup({
  username: new UntypedFormControl('',Validators.required),
  email: new UntypedFormControl('',[Validators.required, Validators.email]),
  password: new UntypedFormControl('', Validators.required),
  confirmpassword: new UntypedFormControl('', Validators.required)
},
{
})
constructor(private fb: UntypedFormBuilder, private router: Router){}

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
