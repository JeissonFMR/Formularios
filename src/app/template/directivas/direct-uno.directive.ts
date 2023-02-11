import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDirectUno] [ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: DirectUnoDirective,
    multi: true
  }]
})
export class DirectUnoDirective implements Validator {


  @Input() minimo!: number
  constructor() { }

  validate(control: FormControl): ValidationErrors | null {
    const inputValue = control.value;
    // console.log(inputValue);
    // console.log('minimo', this.minimo);
    return (inputValue < this.minimo) ? { 'custommin': true } : null
  }

}
