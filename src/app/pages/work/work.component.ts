import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { gsap } from 'gsap';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

@Component({
  selector: 'app-work',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WorkComponent implements AfterViewInit {
  @ViewChild('workSection') workSection!: ElementRef;

  constructor(private router: Router) {}

  projects: Project[] = [
    {
      title: 'Enterprise Analytics Dashboard',
      description:
        'A comprehensive role-based analytics dashboard with real-time data visualization, multi-user authentication, and responsive UI components. Built with Angular and Node.js backend, deployed on AWS.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'AWS', 'SCSS'],
      link: 'notfound',
    },
    {
      title: 'Logistics Tracking System',
      description:
        'Real-time shipment tracking platform with timeline visualization, GPS integration, and API-driven architecture. Includes mobile-responsive design and push notifications.',
      tech: ['Angular', 'Node.js', 'REST API', 'TypeScript', 'Google Maps', 'WebSockets'],
      link: 'notfound',
    },
    {
      title: 'Multi-tenant SaaS Application',
      description:
        'Scalable SaaS platform with tenant isolation, billing system, and feature management. Built with .NET Core, React, and deployed on AWS with auto-scaling capabilities.',
      tech: ['.NET Core', 'React', 'AWS', 'Stripe API', 'PostgreSQL', 'Docker'],
      link: 'notfound',
    },
  ];

  ngAfterViewInit() {
    gsap.registerPlugin();
  }

  handleProjectLink(link?: string) {
    if (!link) return;

    if (link === 'notfound') {
      this.router.navigateByUrl('/notfound');
      return;
    }

    // External link
    window.open(link, '_blank');
  }

  notFound() {
    this.router.navigate(['/notfound']);
  }
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToNotFound() {
    this.router.navigateByUrl('/notfound');
  }
}
