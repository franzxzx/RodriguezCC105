import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ToastrModule } from 'ngx-toastr'
import { MaterialModule } from 'src/material.module';




@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBnsSZHTI8dsrDu-b7Vv25ygksI4vTYnRw",
      authDomain: "cc105-b.firebaseapp.com",
      databaseURL: "https://cc105-b-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "cc105-b",
      storageBucket: "cc105-b.appspot.com",
      messagingSenderId: "409441923438",
      appId: "1:409441923438:web:e0dcf4a50eea940774917f",
      measurementId: "G-471C0TR8F9"
    }),
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
