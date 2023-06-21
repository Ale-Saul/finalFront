import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Playlist } from '../models/playlist.model';
import { LocalStorageServiceService } from './local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http : HttpClient, private localStorageService : LocalStorageServiceService) { }
  playlistSeleccionada: BehaviorSubject<Playlist | null> = new BehaviorSubject<Playlist | null>(null);

  token = this.localStorageService.getItem('token');

  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  })


  obtenerPlaylist(){
    return this.http.get('http://localhost:3000/playlist', { headers: this.headers });
  }
  crearPlaylist(playlist : any){
    return this.http.post('http://localhost:3000/playlist', playlist, { headers: this.headers });
  }
  eliminarPlaylist(id: any){
    return this.http.delete(`http://localhost:3000/playlist/${id}`, { headers: this.headers });
  }
  agregarCancion(id: string, cancion : any){
    return this.http.post(`http://localhost:3000/playlist/cancion/${id}`, cancion, { headers: this.headers });
  }
  eliminarCancion(id: string, Idcancion : string){
    return this.http.delete(`http://localhost:3000/playlist/${id}/cancion/${Idcancion}`, { headers: this.headers });
  }
  getPlaylist(playlistId: number){
    return this.http.get<Playlist>(`http://localhost:3000/playlist/${playlistId}`, { headers: this.headers });
  }
  guardarCambios(id: string, playlist : any){
    return this.http.patch(`http://localhost:3000/playlist/${id}`, playlist, { headers: this.headers });
  }
}
