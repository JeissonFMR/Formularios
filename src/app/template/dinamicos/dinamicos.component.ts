import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Jeisson',
    favoritos: [
      { id: 1, nombre: 'Goku' },
      { id: 2, nombre: 'Gohan' },
    ]
  }


  guardar(miFormularioDinamico: NgForm) {
    console.log(miFormularioDinamico);
    console.log('form posteado');
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = ''
  }
}
