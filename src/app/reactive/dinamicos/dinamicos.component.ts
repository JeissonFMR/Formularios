import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  miFormularioDinamico: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Goku', Validators.required],
      ['Vegeta', Validators.required],
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr() {
    return this.miFormularioDinamico.get('favoritos') as FormArray
  }

  constructor(private fb: FormBuilder) { }

  campoNoEsValido(campo: string) {
    return this.miFormularioDinamico.controls[campo].invalid && this.miFormularioDinamico.controls[campo].touched;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset(); //borrar lo que escribio en el inoput dinamico
  }


  guardar() {
    if (this.miFormularioDinamico.invalid) {
      this.miFormularioDinamico.markAllAsTouched();
      return;
    }
    console.log(this.miFormularioDinamico.value);
  }

  borrar(index: number) {
    this.favoritosArr.removeAt(index)
  }

}
