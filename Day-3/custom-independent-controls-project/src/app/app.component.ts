import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  signupForm: FormGroup;
  signupFormTwo: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      password: [],
      profile: []
    });
    this.signupFormTwo = this.formBuilder.group({
      profileTwo: []
    });
  }


  submit() {
    console.log(this.signupForm.value);
  }

  resetForm() {
    this.signupForm.reset();
  }

  submitTwo() {
    console.log(this.signupFormTwo.value);
  }

  resetFormTwo() {
    this.signupFormTwo.reset();
  }
}
