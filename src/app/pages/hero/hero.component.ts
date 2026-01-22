import { Component, AfterViewInit, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroText') heroText!: ElementRef;

  ngAfterViewInit() {
    // Animate hero text content
    gsap.from(this.heroText.nativeElement.children, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Animate decorative element
    // gsap.to(this.decoration.nativeElement, {
    //   duration: 20,
    //   rotation: 360,
    //   repeat: -1,
    //   ease: 'none'
    // });
  }
}