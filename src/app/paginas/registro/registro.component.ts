import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  constructor(private usuarioService: UsuarioService) { }
  registrarUsuario() {
    const nombre = (document.getElementById('username') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirm = (document.getElementById('confirm-password') as HTMLInputElement).value;
    const usuario = {
      "nombre": nombre,
      "correo": email,
      "password": password
    }
    if (nombre != '' && email != '' && password != '') {
      if(password == confirm)
      {
        this.usuarioService.registrarUsuario(usuario).subscribe(
          (response: any) => {
            console.log(response);
            console.log(usuario);
          },
          (error) => {
            console.log(error);
          }
        );
        alert('Usuario registrado con exito');
        window.location.href = '/login';
      }
      else{
        alert('Las contraseñas no coinciden');
      }
    }
    else {
      alert('Complete todos los campos');
    }
  }
}
