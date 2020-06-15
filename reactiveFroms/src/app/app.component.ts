import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/userName.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName() {
    return this.registrationForm.get('userName');
  }

  constructor(private fb: FormBuilder){}

//  registrationForm = new FormGroup({
//      userName: new FormControl('Biraz'),
//      password: new FormControl(''),
//      confirmPassword: new FormControl(''),
//      address : new FormGroup({
//        city: new FormControl(''),
//        state: new FormControl(''),
//        postalCode: new FormControl('')
//      })
//  });

      registrationForm = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
        password: [''],
        confirmPassword: [''],
        address: this.fb.group({
          City: [''],
          state: [''],
          postalCode: ['']
        })
      },{validators: PasswordValidator});

 loadApiData(){
   this.registrationForm.patchValue({
      userName: 'Biraz',
      email : [''],
      subscribe: [false],
      password: 'Dahal',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state : 'State',
        postalCode : '123456'
      }
   })
 }

}


// setValue is used to manage all the form values where as patchValue is used to manage some of the form values