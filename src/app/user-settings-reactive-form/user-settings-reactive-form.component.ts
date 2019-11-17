import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-settings-reactive-form',
  templateUrl: './user-settings-reactive-form.component.html',
  styleUrls: ['./user-settings-reactive-form.component.scss']
})
export class UserSettingsReactiveFormComponent implements OnInit {
  public userSettingForm: FormGroup;
  public formSubmitted = false;

  constructor() {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.userSettingForm = new FormGroup({
      name: new FormControl('Vivek Kumar', { validators: Validators.required, updateOn: 'change' }),
      emailOffers: new FormControl(false),
      interfaceStyle: new FormControl(''),
      subscriptionType: new FormControl(''),
      notes: new FormControl('')
    });
  }

  submitUserSettingsForm() {
    this.formSubmitted = true;
    console.log(this.userSettingForm);
  }
}
