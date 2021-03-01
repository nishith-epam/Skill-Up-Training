import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, NgbModule],
  declarations: [AppComponent, PasswordFormComponent, ProfileFormComponent, CustomDropdownComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
