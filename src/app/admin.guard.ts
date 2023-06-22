import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from './service/usuario.service';
import { AuthServiceService } from './service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private usuarioService : UsuarioService, private router : Router, private authService :AuthServiceService ){}

  canActivate(): boolean {
    if(this.usuarioService.estaLogueado() && this.authService.esAdministrador()){
      return true;
    }else{
      this.router.navigateByUrl('/inicio');
      return false;
    }
  }
}
