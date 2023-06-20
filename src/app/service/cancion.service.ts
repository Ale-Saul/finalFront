import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cancion } from '../models/cancion.model';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private http : HttpClient) { }
  cancionSeleccionada: BehaviorSubject<Cancion | null> = new BehaviorSubject<Cancion | null>(null);
  cancionEliminar: BehaviorSubject<Cancion | null> = new BehaviorSubject<Cancion | null>(null);
  agregarCancion(cancion : any){
    return this.http.post('http://localhost:3000/cancion', cancion);
  }
  obtenerCancionPop(){
    return this.http.get('http://localhost:3000/cancion/genero/Pop');
  }
  obtenerCancionCumbia(){
    return this.http.get('http://localhost:3000/cancion/genero/Cumbia');
  }
  obtenerCancionRock(){
    return this.http.get('http://localhost:3000/cancion/genero/Rock');
  }
  obtenerCancionReggaeton(){
    return this.http.get('http://localhost:3000/cancion/genero/Regueton');
  }
  guardarCambios(id: string, cancion : any){
    return this.http.patch(`http://localhost:3000/cancion/${id}`, cancion);
  }
  eliminarCancion(id: string){
    return this.http.delete(`http://localhost:3000/cancion/${id}`);
  }
}
