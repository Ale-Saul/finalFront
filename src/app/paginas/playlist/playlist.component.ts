import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { PlaylistService } from 'src/app/service/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  datosRecuperados: any = [];

  @ViewChild('myInput') myInput!: ElementRef;

  constructor(
    private menuService: MenuService,
    private playlistService: PlaylistService
  ) { }

  ngOnInit(): void {
    this.playlistService.obtenerPlaylist().subscribe(
      (response: any) => {
        this.datosRecuperados = response;
      },

      (error) => {
        console.log(error);
      }
    );
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
  crear(){
    const nombre =  this.myInput.nativeElement.value;
    const playlist = {
      "nombre": nombre,
      "canciones": [],
    }
    if (nombre != '')
    {
      this.playlistService.crearPlaylist(playlist).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      window.location.reload();
    }
    else{
      alert('Ingrese un nombre para la playlist');
    }
  }
  mostrarBotones(){
    document.getElementById("eliminar")?.classList.remove("hide");
    document.getElementById("editar")?.classList.remove("hide");
  }
  eliminar(){
    const id = this.playlistService.playlistSeleccionada?.getValue()?.id;
    if (id != undefined)
    {
      this.playlistService.eliminarPlaylist(id).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      window.location.reload();
    }
  }
}
