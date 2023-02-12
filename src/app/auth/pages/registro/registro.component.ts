import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validators/validaciones';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  //email existe
  get emailErrorMsjs(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']) {
      return 'Email es obligatorio'
    } else if (errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo electronico'
    } else if (errors?.['emailTomado']) {
      return 'El correo ya existe'
    }
    return '';
  }


  miFormulario: FormGroup = this.fb.group({
    nombre: ['Jeisson M', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['test@test.com', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['jmhero', [Validators.required, this.validatorService.noPuedeSerStrider], []],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    confirmar: ['123456', [Validators.required, this.validatorService.noPuedeSerStrider]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'confirmar')]
  });
  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidator: EmailValidatorService) { }


  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }



}
