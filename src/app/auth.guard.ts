import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from './service/usuario.service';
import { AuthServiceService } from './service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService : UsuarioService, private router : Router, private authService :AuthServiceService ){}

  canActivate(): boolean {
    if(this.usuarioService.estaLogueado()){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  esAdmin(): boolean {
    if (this.authService.esAdministrador()) {
      return true;
    } else {
      return false;
    }
  }
}
