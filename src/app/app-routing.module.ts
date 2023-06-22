import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { AgregarMusicaComponent } from './paginas/agregar-musica/agregar-musica.component';
import { PlaylistComponent } from './paginas/playlist/playlist.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { FormEditMusicaComponent } from './elementos/form-edit-musica/form-edit-musica.component';
import { EditarPlaylistComponent } from './paginas/editar-playlist/editar-playlist.component';
import { LoginComponent } from './paginas/login/login.component';
import { AuthGuard } from './auth.guard';
import { MostrarCancionComponent } from './paginas/mostrar-cancion/mostrar-cancion.component';
import { MostrarPlaylistComponent } from './paginas/mostrar-playlist/mostrar-playlist.component';
import { BuscarPlaylistComponent } from './paginas/buscar-playlist/buscar-playlist.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  {path: 'buscar', component: BuscarComponent, canActivate: [AuthGuard]},
  {path: 'musica', component: AgregarMusicaComponent, canActivate: [AuthGuard]},
  {path: 'playlist', component: PlaylistComponent, canActivate: [AuthGuard]},
  {path: 'registro', component: RegistroComponent},
  {path: 'editarcancion', component: FormEditMusicaComponent, canActivate: [AuthGuard]},
  {path: 'editarplaylist', component: EditarPlaylistComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'mostrarCancion', component: MostrarCancionComponent, canActivate: [AuthGuard]},
  {path: 'mostrarplaylist', component: MostrarPlaylistComponent, canActivate: [AuthGuard]},
  {path: 'buscarplaylist', component: BuscarPlaylistComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
