import { Component } from '@angular/core';
import { CancionService } from 'src/app/service/cancion.service';

@Component({
  selector: 'app-form-musica',
  templateUrl: './form-musica.component.html',
  styleUrls: ['./form-musica.component.scss']
})
export class FormMusicaComponent {
  constructor( private cancionService : CancionService) {}

  submitFormulario(formulario : any){
    if (formulario.valid){
      const formData = new FormData();
      formData.append('titulo', formulario.value.songTitle);
      formData.append('artista', formulario.value.artist);
      formData.append('genero', formulario.value.genre);
      formData.append('duracion', formulario.value.duration);

      const titulo = formulario.value.songTitle;
      const artista = formulario.value.artist;
      const genero = formulario.value.genre;
      const duracion = formulario.value.duration;
      const cancion ={
        "titulo": titulo,
        "artista": artista,
        "genero": genero,
        "duracion": duracion
      };
      this.cancionService.agregarCancion(cancion).subscribe(
        (response) => {
          alert('Cancion agregada con exito');
          console.log(response);
        },
        (error) => {
          alert('Error al agregar cancion');
          console.log(error);
        }
      );
    }
  }

}
