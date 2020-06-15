import { Component } from '@angular/core';
import { User } from './user';
import { EmrollmentService } from './emrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg;


  userModel = new User('Rob','rob@test.com',5555566777,'default','morning',true);

  constructor(private _enrollmentServices: EmrollmentService){}

  validateTopic(value) {
    if(value ===  "default"){
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentServices.enroll(this.userModel)
        .subscribe(
          data => console.log('Success', data),
          error => this.errorMsg = error.statusText
        )
  }

}
