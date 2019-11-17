import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNameCase]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useClass: forwardRef(() => NameCaseDirective)
    }
  ]
})
export class NameCaseDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    console.log(control);
    if (control && control.value && control.value !== control.value.toLowerCase()) {
      return { appNameCase: true };
    }
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
  }
}
