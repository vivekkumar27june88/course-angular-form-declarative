import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { usernameValidator } from '../validators/username-exist-validator';
import { distinctUntilChanged } from 'rxjs/operators';

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
    this.initValueChange();
  }

  ngOnInit() {}

  createForm() {
    this.userSettingForm = this.fb.group({
      name: ['Vivek Kumar', { validators: Validators.required, updateOn: 'change' }],
      email: ['', { asyncValidators: usernameValidator(this.userService) }],
      emailOffers: [''],
      interfaceStyle: [''],
      subscriptionType: [''],
      address: ['', Validators.required],
      notes: ['']
    });
  }

  initValueChange() {
    this.userSettingForm
      .get('subscriptionType')
      .valueChanges.pipe(distinctUntilChanged())
      .subscribe(newSubscriptionType => {
        const address = this.userSettingForm.get('address');
        if (newSubscriptionType === 'Annual') {
          address.setValidators([Validators.required]);
        } else {
          address.clearValidators();
        }
        address.updateValueAndValidity();
      });
  }

  submitUserSettingsForm() {
    this.formSubmitted = true;
    console.log(this.userSettingForm);
  }
}
