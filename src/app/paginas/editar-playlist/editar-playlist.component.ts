import { Component, ViewChild, ElementRef } from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { Playlist } from 'src/app/models/playlist.model';
import { BuscadorService } from 'src/app/service/buscador.service';
import { CancionService } from 'src/app/service/cancion.service';
import { MenuService } from 'src/app/service/menu.service';
import { PlaylistService } from 'src/app/service/playlist.service';

@Component({
  selector: 'app-editar-playlist',
  templateUrl: './editar-playlist.component.html',
  styleUrls: ['./editar-playlist.component.scss']
})
export class EditarPlaylistComponent {

  playlistSeleccionada: Playlist | null = null;
  id : number = 0;
  titulo : string = '';
  resultados : any = [];

  @ViewChild('myInput') myInput!: ElementRef;

  constructor(private playlistService: PlaylistService,
    private  menuService : MenuService,
    private buscadorService : BuscadorService,
    private cancionService : CancionService) {}

  ngOnInit(): void {
    this.playlistService.playlistSeleccionada.subscribe((playlist) => {
      this.playlistSeleccionada = playlist;
      this.id = this.playlistSeleccionada?.id || 0;
    });
    console.log(this.playlistSeleccionada);
  }

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
  actualizarListaCanciones(cancion: Cancion) {
    this.playlistSeleccionada?.canciones.push(cancion);
  }
  actualizarListaCancionesEliminar(cancion: Cancion) {
    const index = this.playlistSeleccionada?.canciones.findIndex(c => c.id === cancion.id);
    if (index !== undefined && index !== -1) {
      this.playlistSeleccionada?.canciones.splice(index, 1);
    }
  }
  guardarCambios() {
    const nombre= this.myInput.nativeElement.value;
    const playlist = {
      "nombre": nombre,
    }
    if (this.playlistSeleccionada) {
      this.playlistService.guardarCambios(this.id.toString(), playlist)
        .subscribe(
          () => {
            console.log('Nombre de la playlist actualizado con éxito');
          },
          (error) => {
            console.log('Error al actualizar el nombre de la playlist:', error);
          }
        );
    }
  }
  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
