import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesPlaylistComponent } from './canciones-playlist.component';

describe('CancionesPlaylistComponent', () => {
  let component: CancionesPlaylistComponent;
  let fixture: ComponentFixture<CancionesPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionesPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionesPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
