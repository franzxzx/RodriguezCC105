import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { Observable, from, switchMap } from 'rxjs';
import { authState } from '@firebase/auth'; // or from the correct file
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currentUser$ = authState(this.afAuth); 
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = new Observable();
  }

  signUp(username:string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.afAuth, email, password)).pipe( 
      switchMap(({user}) => updateProfile(user, {displayName: username})));
  }

login(email: string, password: string): Observable<any> {
  return from(signInWithEmailAndPassword(this.afAuth, email, password));
}

logout(): Observable<any>{
return from(this.afAuth.signOut());
}
}
