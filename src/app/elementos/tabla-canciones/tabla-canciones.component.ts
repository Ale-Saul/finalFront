import { Component, Input } from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { CancionService } from 'src/app/service/cancion.service';
@Component({
  selector: 'app-tabla-canciones',
  templateUrl: './tabla-canciones.component.html',
  styleUrls: ['./tabla-canciones.component.scss']
})
export class TablaCancionesComponent {
  cartasLimit=6;
  @Input() canciones: any;

  constructor(private cancionService : CancionService) { }
  ngOnInit(): void {
    console.log(this.canciones);
  }
  seleccionarCancion(cancion: Cancion) {
    this.cancionService.cancionSeleccionada.next(cancion);
  }
}
