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
  dropdownOneArray = {
    title: 'Choose your item',
    childrens: [{
      name: 'Level 1',
      items: [
        {
          name: 'item 1-1',
          items: [{ name: 'item 1-1-1' }]
        },
        {
          name: 'item 1-2',
          items: [{ name: 'item 1-2-1' }, { name: 'item 1-2-2' }, { name: 'item 1-2-3' }, { name: 'item 1-2-4' }]
        },
        {
          name: 'item 1-3',
          items: [{ name: 'item 1-3-1' }, { name: 'item 1-3-2' }]
        },
        {
          name: 'item 1-4',
          items: [{ name: 'item 1-4-1' }, { name: 'item 1-4-2' }, { name: 'item 1-4-3' }, { name: 'item 1-4-4' }]
        },]
    },
    {
      name: 'Level 2',
      items: [
        {
          name: 'item 2-1',
          items: [{ name: 'item 2-1-1' }, { name: 'item 2-1-2' }, { name: 'item 2-1-3' }, { name: 'item 2-1-4' }]
        },
        {
          name: 'item 2-2',

        },
        {
          name: 'item 2-3',
          items: [{ name: 'item 2-3-1' }, { name: 'item 2-3-2' }]
        }]
    },
    {
      name: 'Level 3',
      items: [
        {
          name: 'item 3-1',
          items: [{ name: 'item 3-1-1' }, { name: 'item 3-1-2' }, { name: 'item 3-1-3' }]
        },
        {
          name: 'item 3-2',
          items: [{ name: 'item 3-2-1' }, { name: 'item 3-2-2' }]
        },
        {
          name: 'item 3-3',
          items: [{ name: 'item 3-3-1' }]
        }]
    }]
  };

  dropdownTwoArray = {
    title: 'Choose your Flower',
    childrens: [{
      name: 'Flower 1',
      items: [
        {
          name: 'Flower 1-1',
          items: [{ name: 'Flower 1-1-1' }]
        },
        {
          name: 'Flower 1-2',
          items: [{ name: 'Flower 1-2-1' }, { name: 'Flower 1-2-2' }, { name: 'Flower 1-2-3' }, { name: 'Flower 1-2-4' }]
        },
        {
          name: 'Flower 1-3',
          items: [{ name: 'Flower 1-3-1' }, { name: 'Flower 1-3-2' }]
        },
        {
          name: 'Flower 1-4',
          items: [{ name: 'Flower 1-4-1' }, { name: 'Flower 1-4-2' }, { name: 'Flower 1-4-3' }, { name: 'Flower 1-4-4' }]
        },]
    },
    {
      name: 'Flower 2',
      items: [
        {
          name: 'Flower 2-1',
          items: [{ name: 'Flower 2-1-1' }, { name: 'Flower 2-1-2' }, { name: 'Flower 2-1-3' }, { name: 'Flower 2-1-4' }]
        },
        {
          name: 'Flower 2-2',

        },
        {
          name: 'Flower 2-3',
          items: [{ name: 'Flower 2-3-1' }, { name: 'Flower 2-3-2' }]
        }]
    },
    {
      name: 'Flower 3',
      items: [
        {
          name: 'Flower 3-1',
          items: [{ name: 'Flower 3-1-1' }, { name: 'Flower 3-1-2' }, { name: 'Flower 3-1-3' }]
        },
        {
          name: 'Flower 3-2',
          items: [{ name: 'Flower 3-2-1' }, { name: 'Flower 3-2-2' }]
        },
        {
          name: 'Flower 3-3',
          items: [{ name: 'Flower 3-3-1' }]
        }]
    }]
  };

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
