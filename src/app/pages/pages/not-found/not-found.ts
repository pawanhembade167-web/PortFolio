import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotFound {
  private router = inject(Router);
  goToHome(){
    this.router.navigateByUrl('/home');
  }
}
