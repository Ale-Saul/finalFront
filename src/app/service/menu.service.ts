import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuAbiertoSubject = new BehaviorSubject<boolean>(false);
  menuAbierto$ = this.menuAbiertoSubject.asObservable();

  toggleMenu() {
    this.menuAbiertoSubject.next(!this.menuAbiertoSubject.getValue());
  }
}
