import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient : HttpClient) { }

  registrarUsuario(usuario : any){
    return this.httpClient.post('http://localhost:3000/auth/register', usuario);
  }
  loginUsuario(usuario : any){
    return this.httpClient.post('http://localhost:3000/auth/login', usuario);
  }
}
