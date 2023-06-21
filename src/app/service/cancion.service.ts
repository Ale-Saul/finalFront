import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cancion } from '../models/cancion.model';
import { UsuarioService } from './usuario.service';
import { LocalStorageServiceService } from './local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private http : HttpClient, private localStorageService : LocalStorageServiceService) { }
  cancionSeleccionada: BehaviorSubject<Cancion | null> = new BehaviorSubject<Cancion | null>(null);
  cancionEliminar: BehaviorSubject<Cancion | null> = new BehaviorSubject<Cancion | null>(null);

  token = this.localStorageService.getItem('token');

  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  })

  agregarCancion(cancion : any){
    return this.http.post('http://localhost:3000/cancion', cancion,  { headers: this.headers });
  }
  obtenerCancionPop(){
    return this.http.get('http://localhost:3000/cancion/genero/Pop', { headers: this.headers });
  }
  obtenerCancionCumbia(){
    return this.http.get('http://localhost:3000/cancion/genero/Cumbia', { headers: this.headers });
  }
  obtenerCancionRock(){
    return this.http.get('http://localhost:3000/cancion/genero/Rock', { headers: this.headers });
  }
  obtenerCancionReggaeton(){
    return this.http.get('http://localhost:3000/cancion/genero/Regueton', { headers: this.headers });
  }
  guardarCambios(id: string, cancion : any){
    return this.http.patch(`http://localhost:3000/cancion/${id}`, cancion, { headers: this.headers });
  }
  eliminarCancion(id: string){
    return this.http.delete(`http://localhost:3000/cancion/${id}`, { headers: this.headers });
  }
}
