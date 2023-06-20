import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuscadorService } from 'src/app/service/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {
  titulo : string = '';
  resultados : any;
  constructor(private buscadorService: BuscadorService, private router:Router) { }
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
    this.router.navigate(['/resultados', this.titulo], { state: { resultados: this.resultados } });
  }
}
