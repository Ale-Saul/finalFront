import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageServiceService } from './local-storage-service.service';
import { Usuario } from '../models/usuario.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient : HttpClient, private localStorageService : LocalStorageServiceService) { }
  usuarioSeleccionado: BehaviorSubject<Usuario | null> = new BehaviorSubject<Usuario | null>(null);

  token = this.localStorageService.getItem('token');

  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  })

  registrarUsuario(usuario : any){
    return this.httpClient.post('http://localhost:3000/auth/register', usuario);
  }
  loginUsuario(usuario : any){
    return this.httpClient.post('http://localhost:3000/auth/login', usuario);
  }
  guardarCambios(id: string, usuario : any){
    return this.httpClient.patch(`http://localhost:3000/usuario/${id}`, usuario, { headers: this.headers });
  }
  eliminarUsuario(id: string){
    return this.httpClient.delete(`http://localhost:3000/usuario/${id}`, { headers: this.headers });
  }
  buscarUsuario(usuario: string) {
    return this.httpClient.get('http://localhost:3000/usuario/buscar/'+ usuario, { headers: this.headers });
  }
  estaLogueado(){
    return !!localStorage.getItem('token');
  }
}
