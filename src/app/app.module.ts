import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ContentViewComponent,
  FooterComponent,
  MainframeComponent,
  TopToolbarComponent,
  UserRegistrationComponent,
  UserSettingsFormsComponent,
  UserSettingsReactiveFormComponent
} from './components';
import { NameCaseDirective } from './validators/name-case.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormsComponent,
    UserSettingsReactiveFormComponent,
    UserRegistrationComponent,
    NameCaseDirective,
    MainframeComponent,
    TopToolbarComponent,
    ContentViewComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
