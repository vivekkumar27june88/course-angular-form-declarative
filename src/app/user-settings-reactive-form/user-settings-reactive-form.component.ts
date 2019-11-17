import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-settings-reactive-form',
  templateUrl: './user-settings-reactive-form.component.html',
  styleUrls: ['./user-settings-reactive-form.component.scss']
})
export class UserSettingsReactiveFormComponent implements OnInit {
  public userSettingForm: FormGroup;
  public formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.userSettingForm = this.fb.group({
      name: ['Vivek Kumar', { validators: Validators.required, updateOn: 'change' }],
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
