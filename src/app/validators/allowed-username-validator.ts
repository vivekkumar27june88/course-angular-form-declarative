import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function allowedUsername(usernames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value && usernames.includes(control.value) === false) {
      return {
        allowedUsername: true
      };
    }

    return null;
  };
}
