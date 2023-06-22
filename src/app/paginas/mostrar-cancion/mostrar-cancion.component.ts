import { Component} from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { CancionService } from 'src/app/service/cancion.service';

@Component({
  selector: 'app-mostrar-cancion',
  templateUrl: './mostrar-cancion.component.html',
  styleUrls: ['./mostrar-cancion.component.scss']
})
export class MostrarCancionComponent {
  cancionSeleccionada: Cancion | null = null;
  id : number = 0;
  constructor(private cancionService: CancionService) {}
  ngOnInit(): void {
    this.cancionService.cancionSeleccionada.subscribe((cancion) => {
      this.cancionSeleccionada = cancion;
      this.id = this.cancionSeleccionada?.id || 0;
    });
  }
  regresar(){
    this.cancionService.cancionSeleccionada.next(null);
    window.history.back();
  }
}
