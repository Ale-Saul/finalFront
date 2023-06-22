import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
import { AuthGuard } from 'src/app/auth.guard';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})

export class MenuLateralComponent implements OnInit {
  menuAbierto = false;
  constructor (private menuService: MenuService, private authGuard : AuthGuard, private usuarioService : UsuarioService) { }
  ngOnInit() {
    this.menuService.menuAbierto$.subscribe(menuAbierto => {
      this.menuAbierto = menuAbierto;
    });
  }
  cerrarSesion() {
    localStorage.clear();
  }
  toggleMenu() {
    this.menuService.toggleMenu();
  }
  perfilUsuario(){
    const user = localStorage.getItem('usuario');
    this.usuarioService.usuarioSeleccionado.next(JSON.parse(user || '{}'));
    window.location.href = '/perfil';
  }
  esAdmin(){
    if(this.authGuard.esAdmin()){
      return true;
    }
    else
    {
      return false;
    }
  }
}
