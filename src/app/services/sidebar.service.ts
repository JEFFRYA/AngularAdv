import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Modulos',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Clientes', url: '/', },
        { titulo: 'Graficas', url: 'grafica1', },
        { titulo: 'Inicio', url: '/', },
        { titulo: 'Inventario', url: '/', },
        { titulo: 'Promesas', url: 'promise', },
        { titulo: 'Reportes', url: '/', },
        { titulo: 'Rxjs', url: 'rxjs', },
        { titulo: 'Ventas', url: '/', },
      ]
    }
  ];

  constructor() { }
  
}
