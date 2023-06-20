import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { BuscadorService } from 'src/app/service/buscador.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {

  titulo : string = '';
  resultados : any = [];
  constructor(private menuService: MenuService, private buscadorService: BuscadorService) { }
  buscar(){
    this.buscadorService.buscarCanciones(this.titulo).subscribe(
      (data) => {
        this.resultados = data;
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.resultados);
  }
  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
