import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent {
  @Input() usuarios: any;
  @Output() eventoCancion: EventEmitter<any> = new EventEmitter<any>();
  usuarioSeleccionado: Usuario | null = null;
  constructor(private usuarioService : UsuarioService) { }

  seleccionarCancion(usuario: Usuario, target: any) {
    const row = target.parentNode as HTMLTableRowElement | null;
    if (row) {
      this.usuarioService.usuarioSeleccionado.next(usuario);
      this.usuarioSeleccionado = usuario;
      // Resto del código para resaltar la fila seleccionada (opcional)
      const rows = document.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove('selected');
      }
      row.classList.add('selected');
    }
    this.eventoCancion.emit(usuario);
  }
}
