import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  sidebarMenu: boolean = false;
  menuOpen() {
    this.sidebarMenu = !this.sidebarMenu;
  }
  menuClose() {
    this.sidebarMenu = !this.sidebarMenu;
  }

  closeSideBar() {
    this.sidebarMenu = !this.sidebarMenu;
  }
}
