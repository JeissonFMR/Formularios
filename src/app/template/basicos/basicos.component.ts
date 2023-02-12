import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  guardar(miFormulario: NgForm) {
    // console.log(miFormulario);
    console.log('Correcto');
    miFormulario.resetForm();
  }
}
