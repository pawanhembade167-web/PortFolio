import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private pageSource = new BehaviorSubject<'home' | 'notfound'>('home');
  page$ = this.pageSource.asObservable();

  goHome() {
    this.pageSource.next('home');
  }

  goNotFound() {
    this.pageSource.next('notfound');
  }
}
