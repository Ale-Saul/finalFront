import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { PlaylistService } from 'src/app/service/playlist.service';


@Component({
  selector: 'app-buscar-playlist',
  templateUrl: './buscar-playlist.component.html',
  styleUrls: ['./buscar-playlist.component.scss']
})
export class BuscarPlaylistComponent {
  titulo : string = '';
  resultados : any = [];
  constructor(private menuService: MenuService, private playlistService : PlaylistService) { }
  buscar(){
    this.playlistService.buscarPlaylist(this.titulo).subscribe(
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
