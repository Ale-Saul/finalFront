import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { CancionService } from 'src/app/service/cancion.service';
import { PlaylistService } from 'src/app/service/playlist.service';

@Component({
  selector: 'app-canciones-busqueda',
  templateUrl: './canciones-busqueda.component.html',
  styleUrls: ['./canciones-busqueda.component.scss']
})
export class CancionesBusquedaComponent {
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
    this.eventoCancion.emit(cancion);
    /* console.log(this.cancionService.cancionSeleccionada.getValue());
    console.log(this.playlistService.playlistSeleccionada.getValue()); */

  }
}
