import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: '/template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: '/template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: '/template/switches'
    },
  ];

  reactiveteMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: '/reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: '/reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: '/reactive/switches'
    },
  ];

  authMenu: MenuItem[] = [
    {
      texto: 'Login',
      ruta: 'auth/login'
    },
    {
      texto: 'Registro',
      ruta: 'auth/registro'
    },
  ];

}
