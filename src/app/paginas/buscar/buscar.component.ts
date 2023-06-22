import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { BuscadorService } from 'src/app/service/buscador.service';
import { AuthGuard } from 'src/app/auth.guard';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {

  titulo : string = '';
  resultados : any = [];
  constructor(private menuService: MenuService, private buscadorService: BuscadorService, private authGuard : AuthGuard) { }
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
  mostrarBotones(){
    document.getElementById("ver")?.classList.remove("hide");
    document.getElementById("editar")?.classList.remove("hide");
  }
  toggleMenu() {
    this.menuService.toggleMenu();
  }

  esAdmin(){
    if(this.authGuard.esAdmin()){
      return true;
    }
    else
    {
      return false;
    }
  }
}
