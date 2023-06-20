import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { CancionService } from 'src/app/service/cancion.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent {
  datosRecuperadosPop: any = [];
  datosRecuperadosCumbia: any=[];
  datosRecuperadosRock: any=[];
  datosRecuperadosRegueton: any=[];


  constructor(private menuService: MenuService,
    private cancionService: CancionService
  ) { }

  ngOnInit(): void {
    this.cancionService.obtenerCancionPop().subscribe(
      (response: any) => {
        this.datosRecuperadosPop = response;
      },

      (error) => {
        console.log(error);
      }
    );
    this.cancionService.obtenerCancionCumbia().subscribe(
      (response: any) => {
        this.datosRecuperadosCumbia = response;
      },

      (error) => {
        console.log(error);
      }
    );
    this.cancionService.obtenerCancionRock().subscribe(
      (response: any) => {
        this.datosRecuperadosRock = response;
      },

      (error) => {
        console.log(error);
      }
    );
    this.cancionService.obtenerCancionReggaeton().subscribe(
      (response: any) => {
        this.datosRecuperadosRegueton = response;
      },

      (error) => {
        console.log(error);
      }
    );
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
