import { Component} from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { CancionService } from 'src/app/service/cancion.service';
@Component({
  selector: 'app-form-edit-musica',
  templateUrl: './form-edit-musica.component.html',
  styleUrls: ['./form-edit-musica.component.scss']
})
export class FormEditMusicaComponent {
  cancionSeleccionada: Cancion | null = null;
  id : number = 0;
  constructor(private cancionService: CancionService) {}
  ngOnInit(): void {
    this.cancionService.cancionSeleccionada.subscribe((cancion) => {
      this.cancionSeleccionada = cancion;
      this.id = this.cancionSeleccionada?.id || 0;
    });
  }

  guardarCambios(){
    this.cancionService.guardarCambios(this.id.toString() ,this.cancionSeleccionada).subscribe(
      (response: any) => {
        alert('Cancion editada con exito');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  eliminarCancion(){
    this.cancionService.eliminarCancion(this.id.toString()).subscribe(
      (response: any) => {
        alert('Cancion eliminada con exito');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  regresar(){
    this.cancionService.cancionSeleccionada.next(null);
    window.history.back();
  }
}
