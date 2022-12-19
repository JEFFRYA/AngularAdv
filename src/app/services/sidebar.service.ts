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
        { titulo: 'Inicio', url: '/', },
        { titulo: 'Ventas', url: '/', },
        { titulo: 'Clientes', url: '/', },
        { titulo: 'Inventario', url: '/', },
        { titulo: 'Reportes', url: '/', },
        { titulo: 'Graficas', url: 'grafica1', }
      ]
    }
  ];
  constructor() { }
}
