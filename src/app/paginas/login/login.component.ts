import { Component } from '@angular/core';
import { LocalStorageServiceService } from 'src/app/service/local-storage-service.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private usuarioService : UsuarioService,
    private localStorageService : LocalStorageServiceService
  ) { }

  loginUsuario(){
    const email = (document.getElementById('correo') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const usuario = {
      "correo": email,
      "password": password
    }
    console.log(usuario);
    if(email != '' && password != ''){
      this.usuarioService.loginUsuario(usuario).subscribe(
        (response : any) => {
          console.log(response);
          this.localStorageService.setItem('usuario', JSON.stringify(response.user));
          this.localStorageService.setItem('token', response.token);
          window.location.href = '/inicio';
        },
        (error) => {
          alert('Usuario o contraseña incorrectos');
        }
      );
    }
    else{
      alert('Complete todos los campos');
    }
  }
}
