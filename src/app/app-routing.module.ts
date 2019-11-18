import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  UserSettingsFormsComponent,
  UserSettingsReactiveFormComponent,
  UserRegistrationComponent
} from './components';

const routes: Routes = [
  {
    path: 'template-driven-form',
    component: UserSettingsFormsComponent
  },
  {
    path: 'reactive-form',
    component: UserSettingsReactiveFormComponent
  },
  {
    path: 'dynamic-form',
    component: UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
