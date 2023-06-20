import { Component, Input } from '@angular/core';
import { PlaylistService } from 'src/app/service/playlist.service';

@Component({
  selector: 'app-tabla-playlist',
  templateUrl: './tabla-playlist.component.html',
  styleUrls: ['./tabla-playlist.component.scss']
})
export class TablaPlaylistComponent {
  @Input() playlists: any;
  constructor(private playListService : PlaylistService) { }
  seleccionarPlaylist(playlist: any) {
    this.playListService.playlistSeleccionada.next(playlist)
  }
}
