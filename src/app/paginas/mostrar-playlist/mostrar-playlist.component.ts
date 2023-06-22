import { Component, ViewChild, ElementRef } from '@angular/core';
import { Playlist } from 'src/app/models/playlist.model';
import { MenuService } from 'src/app/service/menu.service';
import { PlaylistService } from 'src/app/service/playlist.service';

@Component({
  selector: 'app-mostrar-playlist',
  templateUrl: './mostrar-playlist.component.html',
  styleUrls: ['./mostrar-playlist.component.scss']
})
export class MostrarPlaylistComponent {
  playlistSeleccionada: Playlist | null = null;
  id : number = 0;
  titulo : string = '';
  resultados : any = [];

  @ViewChild('myInput') myInput!: ElementRef;

  constructor(private playlistService: PlaylistService,
    private  menuService : MenuService) {}

  ngOnInit(): void {
    this.playlistService.playlistSeleccionada.subscribe((playlist) => {
      this.playlistSeleccionada = playlist;
      this.id = this.playlistSeleccionada?.id || 0;
    });
    console.log(this.playlistSeleccionada);
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
  mostrarBoton() {
    document.getElementById("ver")?.classList.remove("hide");
  }
  regresar(){
    this.playlistService.playlistSeleccionada.next(null);
    window.history.back();
  }
}
