import { Component, OnInit, HostBinding } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
//Ancienne version
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import {moveIn} from '..//router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [moveIn()],
  host: { '[@moveIn]': '' }
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFireAuth, private router: Router) {
     /*  this.af.auth.subscribe(auth => {
        if (auth) {
          this.router.navigateByUrl('/members');
        }
      }); */
      if(!this.af.auth.currentUser.isAnonymous)
      {
        this.router.navigateByUrl('/members');

      }
  }

  ngOnInit() {
  }

  // loginFb() {
  // this.af.auth.login({
  /*  provider: AuthProviders.Facebook,
   method: AuthMethods.popup,
 }).then(
   (seccess) => {
     this.router.navigate(['/members']);
   }).catch(
     (err) => {
       this.error = err;
     }
   ) */
  loginFb() {
    this.af.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(
        (seccess) => {
          this.router.navigate(['/members']);
        }).catch(
          (err) => {
            this.error = err;
          }
        );
  }

  //loginGoogle() {
  /* his.af.auth.login({
    provider: AuthProviders.Google,
    method: AuthMethods.popup,
  }).then(
    (success) => {
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
        this.error = err;
      }
    )

} */
  loginGoogle() {
    this.af.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
    (success) => {
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
        this.error = err;
      }
    );
  }
}
