import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';
@Component({
  selector: 'app-agregar-musica',
  templateUrl: './agregar-musica.component.html',
  styleUrls: ['./agregar-musica.component.scss']
})
export class AgregarMusicaComponent {
  constructor(private menuService: MenuService) { }
  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
