import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/auth.guard';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  constructor(private usuarioService : UsuarioService, private authGuard :AuthGuard) { }
  user = JSON.parse(localStorage.getItem('usuario') || '{}');

  ngOnInit(): void {
    if(this.usuarioService.usuarioSeleccionado.getValue()!=null){
      this.user = this.usuarioService.usuarioSeleccionado.getValue();
    }
    console.log(this.user);
  }
  regresar(){
    window.history.back();
  }
  guardarCambios(){
    this.usuarioService.guardarCambios(this.user.id.toString(), this.user).subscribe(
      (response: any) => {
        alert('Datos editados con exito');
        console.log(response);
      }
    );
  }
  eliminarCuenta(){
    this.usuarioService.eliminarUsuario(this.user.id.toString()).subscribe(
      (response: any) => {
        alert('Cuenta eliminada con exito');
        console.log(response);
        localStorage.clear();
        window.location.href = '/login';
      }
    );
  }
  esAdmin(){
    return this.authGuard.esAdmin();
  }
}
