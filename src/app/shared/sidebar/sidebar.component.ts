import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent {

  menuItem: any[] = [];

  constructor(private sidebarServices: SidebarService){
    this.menuItem = this.sidebarServices.menu;
  }

}
