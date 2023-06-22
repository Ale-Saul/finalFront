import { Component } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.scss']
})
export class BuscarUsuarioComponent {
  titulo : string = '';
  resultados : any = [];
  constructor(private menuService: MenuService, private usuarioService : UsuarioService) { }
  buscar(){
    this.usuarioService.buscarUsuario(this.titulo).subscribe(
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
  }
  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
