import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSettingsFormsComponent } from './user-settings-forms/user-settings-forms.component';
import { UserSettingsReactiveFormComponent } from './user-settings-reactive-form/user-settings-reactive-form.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NameCaseDirective } from './validators/name-case.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormsComponent,
    UserSettingsReactiveFormComponent,
    UserRegistrationComponent,
    NameCaseDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
