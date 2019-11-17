import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noDecimal } from '../validators/decimal-validator';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  public regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createRegFrom();
  }
  get addresses() {
    return this.regForm.get('addresses') as FormArray;
  }

  ngOnInit() {}

  createRegFrom() {
    this.regForm = this.fb.group({
      basic: this.fb.group({
        firstName: [
          { value: '', disabled: false },
          [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
        ],
        lastName: [
          { value: '', disabled: false },
          [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
        ],
        age: ['', { validators: [noDecimal], updateOn: 'change' }]
      }),
      login: this.fb.group({
        username: [
          { value: '', disabled: false },
          [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
        ],
        email: [
          { value: '', disabled: false },
          [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]
        ],
        password: [
          { value: '', disabled: false },
          [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
        ],
        repeatPassword: [
          { value: '', disabled: false },
          [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
        ],
        securityQuestion: [
          { value: '', disabled: false },
          [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
        ],
        securityAnswer: [
          { value: '', disabled: false },
          [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
        ]
      }),
      addresses: this.fb.array([this.createAddressFormGroup()])
    });
  }

  createAddressFormGroup() {
    return this.fb.group({
      flat: [
        { value: '', disabled: false },
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      street: [
        { value: '', disabled: false },
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      city: [
        { value: '', disabled: false },
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      state: [
        { value: '', disabled: false },
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      pin: [
        { value: '', disabled: false },
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ]
    });
  }

  addAnotherAddressBtnClickHandler() {
    this.addresses.push(this.createAddressFormGroup());
  }

  submitForm() {
    console.log(this.regForm);
  }
}
