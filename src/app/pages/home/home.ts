import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { WorkComponent } from '../work/work.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { NotFound } from "../pages/not-found/not-found";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    WorkComponent,
    SkillsComponent,
    ContactComponent
  ],
  template: `
    <section id="hero"><app-hero /></section>
    <section id="about"><app-about /></section>
    <section id="work"><app-work /></section>
    <section id="skills"><app-skills /></section>
    <section id="contact"><app-contact /></section>
  `
})
export class HomeComponent {}
