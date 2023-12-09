import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { Observable, from, switchMap } from 'rxjs';
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth;
  currentUser$ = authState(this.auth); 
  user$: Observable<any>;

  constructor() {
    this.auth = getAuth();
    this.user$ = new Observable();
  }

  signUp(username:string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe( 
      switchMap(({user}) => updateProfile(user, {displayName: username})));
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout(): Observable<any>{
    return from(this.auth.signOut());
  }
}