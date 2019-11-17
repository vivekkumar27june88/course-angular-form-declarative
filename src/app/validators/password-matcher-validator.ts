import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatcher(c: AbstractControl): ValidationErrors {
  console.log(c);
  if (
    c.get('password') &&
    c.get('password').value &&
    c.get('repeatPassword') &&
    c.get('repeatPassword').value
  ) {
    if (c.get('repeatPassword').value !== c.get('password').value) {
      return {
        passwordMatcher: true
      };
    }
  }

  return null;
}
