import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistService } from 'src/app/service/playlist.service';

@Component({
  selector: 'app-tabla-playlist',
  templateUrl: './tabla-playlist.component.html',
  styleUrls: ['./tabla-playlist.component.scss']
})
export class TablaPlaylistComponent {
  @Input() playlists: any;
  @Output() seleccionPlaylist: EventEmitter<any> = new EventEmitter<any>();
  playlistSeleccionada: any;

  constructor(private playListService : PlaylistService) { }

  seleccionarPlaylist(playlist: any, target : any) {
    const row = target.parentNode as HTMLTableRowElement | null;
    if (row) {
      this.playListService.playlistSeleccionada.next(playlist);
      this.playlistSeleccionada = playlist;
      const rows = document.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove('selected');
      }
      row.classList.add('selected');
      this.seleccionPlaylist.emit(playlist);
    }
  }
}
