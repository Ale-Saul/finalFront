import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { AgregarMusicaComponent } from './paginas/agregar-musica/agregar-musica.component';
import { PlaylistComponent } from './paginas/playlist/playlist.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { FormEditMusicaComponent } from './elementos/form-edit-musica/form-edit-musica.component';
import { EditarPlaylistComponent } from './paginas/editar-playlist/editar-playlist.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'musica', component: AgregarMusicaComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'editarcancion', component: FormEditMusicaComponent},
  {path: 'editarplaylist', component: EditarPlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
