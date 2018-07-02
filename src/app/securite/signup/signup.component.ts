import { Component, OnInit } from '@angular/core';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
//import { auth } from 'firebase';
import { Router } from '@angular/router';
//import {moveIn, fallIn} from '..//router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class SignupComponent implements OnInit {

  state: String = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) { }

  onSubmit(formData) {
    /* if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {

          this.router.navigate(['/login']);
          
        }).catch(
          (err) => {

            this.error = err;
            
          }
        )
    } */

    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {

          this.router.navigate(['/login']);

        }).catch(
          (err) => {

            this.error = err;

          }
        )
    }
  }

  ngOnInit() {
  }

}
