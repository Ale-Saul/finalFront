import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { CancionService } from 'src/app/service/cancion.service';
import { PlaylistService } from 'src/app/service/playlist.service';

@Component({
  selector: 'app-canciones-lista',
  templateUrl: './canciones-lista.component.html',
  styleUrls: ['./canciones-lista.component.scss']
})
export class CancionesListaComponent {

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
      this.cancionService.cancionSeleccionada.next(cancion);
      this.cancionSeleccionada = cancion;
      // Resto del código para resaltar la fila seleccionada (opcional)
      const rows = document.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove('selected');
      }
      row.classList.add('selected');
    }
    /* console.log(this.cancionService.cancionSeleccionada.getValue());
    console.log(this.playlistService.playlistSeleccionada.getValue()); */
  }
  agregarCancion() {
    if (this.cancionSeleccionada && this.playlistService.playlistSeleccionada.getValue()?.id !=0) {
      const idplaylist = this.playlistService.playlistSeleccionada.getValue()?.id.toString() || "0";
      const idcancion = this.cancionSeleccionada.id.toString();
      const titulo = this.cancionSeleccionada.titulo;
      const artista = this.cancionSeleccionada.artista;
      const genero = this.cancionSeleccionada.genero;
      const duracion = this.cancionSeleccionada.duracion;
      const cancion ={
        "id": idcancion,
        "titulo": titulo,
        "artista": artista,
        "genero": genero,
        "duracion": duracion
      };
      const cancion1 ={
        "id": parseInt(idcancion),
        "titulo": titulo,
        "artista": artista,
        "genero": genero,
        "duracion": duracion
      };
      this.cancionService.cancionSeleccionada.next(cancion1);
      this.playlistService.agregarCancion(idplaylist, cancion).subscribe(
        (response: any) => {
          console.log(response);
        }
      );
    }
    this.eventoCancion.emit(this.cancionSeleccionada);
  }
}
