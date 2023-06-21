import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})

export class MenuLateralComponent implements OnInit {
  menuAbierto = false;
  constructor (private menuService: MenuService) { }
  ngOnInit() {
    this.menuService.menuAbierto$.subscribe(menuAbierto => {
      this.menuAbierto = menuAbierto;
    });
  }
  cerrarSesion() {
    localStorage.clear();
  }
  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
