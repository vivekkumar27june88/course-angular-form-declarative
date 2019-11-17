import { ValidationErrors, AbstractControl } from '@angular/forms';

export function noDecimal(control: AbstractControl): ValidationErrors | null {
  console.log(control.value);
  if (control.value && control.value.toString().indexOf('.') >= 0) {
    return { noDecimal: true };
  }

  return null;
}
