import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
//import { auth } from 'firebase';
import { Router } from '@angular/router';
//import {moveIn, fallIn} from '..//router.animations';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  // animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }

})
export class EmailComponent implements OnInit {
  state: String = '';
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


  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(
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
