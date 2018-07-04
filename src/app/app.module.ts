import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import du module AngularFireModule
import { AngularFireModule } from 'angularfire2';
//import {AngularFireStoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './securite/login/login.component';
import { EmailComponent } from './securite/email/email.component';
import { SignupComponent } from './securite/signup/signup.component';
import { MembersComponent } from './securite/members/members.component';

// Initialize Firebase
/* export const firebaseConfig = {
  apiKey: "AIzaSyA7NiDA2lK2_Kmh5HSOiEORf5ct0v-qb8Q",
  authDomain: "tikketam.firebaseapp.com",
  databaseURL: "https://tikketam.firebaseio.com",
  projectId: "tikketam",
  storageBucket: "",
  messagingSenderId: "515589436101"
};
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
   // AngularFireModule.initializeApp(firebaseConfig)
   AngularFireModule.initializeApp(environment.firebase, 'Tikketam')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
