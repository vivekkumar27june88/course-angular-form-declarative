import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PageNotFoundComponent,
  UserRegistrationComponent,
  UserSettingsFormsComponent,
  UserSettingsReactiveFormComponent
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
  },
  {
    path: '',
    redirectTo: 'dynamic-form',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
