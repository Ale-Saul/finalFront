import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http: HttpClient, private localStorageService : LocalStorageServiceService) { }
  token = this.localStorageService.getItem('token');

  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  })

  buscarCanciones(cancion: string) {
    return this.http.get('http://localhost:3000/cancion/buscar/'+ cancion, { headers: this.headers });
  }

}
