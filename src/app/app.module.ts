import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './elementos/menu-lateral/menu-lateral.component';
import { BuscadorComponent } from './elementos/buscador/buscador.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { FormMusicaComponent } from './elementos/form-musica/form-musica.component';
import { AgregarMusicaComponent } from './paginas/agregar-musica/agregar-musica.component';
import { PlaylistComponent } from './paginas/playlist/playlist.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { TablaCancionesComponent } from './elementos/tabla-canciones/tabla-canciones.component';
import { FormEditMusicaComponent } from './elementos/form-edit-musica/form-edit-musica.component';
import { TablaPlaylistComponent } from './elementos/tabla-playlist/tabla-playlist.component';
import { EditarPlaylistComponent } from './paginas/editar-playlist/editar-playlist.component';
import { CancionesListaComponent } from './elementos/canciones-lista/canciones-lista.component';
import { CancionesPlaylistComponent } from './elementos/canciones-playlist/canciones-playlist.component';
import { LoginComponent } from './paginas/login/login.component';
import { CancionesBusquedaComponent } from './elementos/canciones-busqueda/canciones-busqueda.component';
import { MostrarCancionComponent } from './paginas/mostrar-cancion/mostrar-cancion.component';
import { MostrarPlaylistComponent } from './paginas/mostrar-playlist/mostrar-playlist.component';
import { BuscarPlaylistComponent } from './paginas/buscar-playlist/buscar-playlist.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { UsuarioListaComponent } from './elementos/usuario-lista/usuario-lista.component';
import { BuscarUsuarioComponent } from './paginas/buscar-usuario/buscar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    BuscadorComponent,
    InicioComponent,
    BuscarComponent,
    FormMusicaComponent,
    AgregarMusicaComponent,
    PlaylistComponent,
    RegistroComponent,
    TablaCancionesComponent,
    FormEditMusicaComponent,
    TablaPlaylistComponent,
    EditarPlaylistComponent,
    CancionesListaComponent,
    CancionesPlaylistComponent,
    LoginComponent,
    CancionesBusquedaComponent,
    MostrarCancionComponent,
    MostrarPlaylistComponent,
    BuscarPlaylistComponent,
    PerfilComponent,
    UsuarioListaComponent,
    BuscarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
