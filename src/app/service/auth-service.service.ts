import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // Obtener el usuario del Local Storage u otra fuente de datos
  private usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  // Verificar si el usuario tiene el rol de administrador
  esAdministrador(): boolean {
    return this.usuario && this.usuario.rol === true;
  }
}
