import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Playlist } from '../models/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http : HttpClient) { }
  playlistSeleccionada: BehaviorSubject<Playlist | null> = new BehaviorSubject<Playlist | null>(null);
  obtenerPlaylist(){
    return this.http.get('http://localhost:3000/playlist');
  }
  crearPlaylist(playlist : any){
    return this.http.post('http://localhost:3000/playlist', playlist);
  }
  agregarCancion(id: string, cancion : any){
    return this.http.post(`http://localhost:3000/playlist/cancion/${id}`, cancion);
  }
  eliminarCancion(id: string, Idcancion : string){
    return this.http.delete(`http://localhost:3000/playlist/${id}/cancion/${Idcancion}`);
  }
  getPlaylist(playlistId: number){
    return this.http.get<Playlist>(`http://localhost:3000/playlist/${playlistId}`);
  }
  guardarCambios(id: string, playlist : any){
    return this.http.patch(`http://localhost:3000/playlist/${id}`, playlist);
  }
}
