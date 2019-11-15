import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.scss']
})
export class UserSettingsFormsComponent implements OnInit {
  userSettings: UserSettings = {
    name: null,
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'I like Angular framework'
  };
  constructor() {}

  ngOnInit() {}

  submitUserSettingsForm(form: NgForm) {
    console.log('TCL: UserSettingsFormsComponent -> submitUserSettingsForm -> form', form);
  }
}
