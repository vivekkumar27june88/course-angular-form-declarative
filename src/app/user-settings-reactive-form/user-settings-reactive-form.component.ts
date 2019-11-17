import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { usernameValidator } from '../validators/username-exist-validator';

@Component({
  selector: 'app-user-settings-reactive-form',
  templateUrl: './user-settings-reactive-form.component.html',
  styleUrls: ['./user-settings-reactive-form.component.scss']
})
export class UserSettingsReactiveFormComponent implements OnInit {
  public userSettingForm: FormGroup;
  public formSubmitted = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.userSettingForm = this.fb.group({
      name: ['Vivek Kumar', { validators: Validators.required, updateOn: 'change' }],
      email: ['', { asyncValidators: usernameValidator(this.userService) }],
      emailOffers: [''],
      interfaceStyle: [''],
      subscriptionType: [''],
      notes: ['']
    });
  }

  submitUserSettingsForm() {
    this.formSubmitted = true;
    console.log(this.userSettingForm);
  }
}
