import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { CancionService } from 'src/app/service/cancion.service';
import { PlaylistService } from 'src/app/service/playlist.service';


@Component({
  selector: 'app-canciones-playlist',
  templateUrl: './canciones-playlist.component.html',
  styleUrls: ['./canciones-playlist.component.scss']
})
export class CancionesPlaylistComponent {

  @Input() canciones: any;
  @Output() eventoCancion: EventEmitter<any> = new EventEmitter<any>();
  cancionSeleccionada: Cancion | null = null;
  constructor(private cancionService : CancionService,
    private playlistService : PlaylistService ) { }

  ngOnInit(): void {
    console.log(this.canciones);

  }
  seleccionarCancion(cancion: Cancion, target: any) {
    const row = target.parentNode as HTMLTableRowElement | null;
    if (row) {
      this.cancionService.cancionEliminar.next(cancion);
      this.cancionSeleccionada = cancion;
      const rows = document.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove('selected');
      }
      row.classList.add('selected');
    }
  }
  eliminarCancion() {
    if (this.cancionSeleccionada && this.playlistService.playlistSeleccionada.getValue()?.id !=0) {
      const idplaylist = this.playlistService.playlistSeleccionada.getValue()?.id.toString() || "0";
      const idcancion = this.cancionSeleccionada.id.toString();
      this.playlistService.eliminarCancion(idplaylist,idcancion).subscribe(
        (response: any) => {
          console.log(response);
        }
      );
      this.eventoCancion.emit(this.cancionSeleccionada);
    }
  }
}
