import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS', 'RxJS', 'Node.js', 'REST APIs', 'Architecture'];
}
