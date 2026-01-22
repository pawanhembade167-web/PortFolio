import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {}
