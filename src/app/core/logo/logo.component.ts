import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
 template: `
    <div class="logo-container">
      <svg
        class="logo-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <!-- Outer hexagon -->
        <polygon 
          class="hex-outer"
          points="50,8 85,28 85,68 50,88 15,68 15,28" 
          fill="none" 
          stroke="url(#gradient1)" 
          stroke-width="2.5" 
          opacity="0.6"
        />
        
        <!-- Inner hexagon -->
        <polygon 
          class="hex-inner"
          points="50,18 75,33 75,63 50,78 25,63 25,33" 
          fill="none" 
          stroke="url(#gradient2)" 
          stroke-width="2"
          opacity="0.4"
        />

        <!-- Stylized "F" for Freelancer -->
        <g class="letter-f">
          <!-- Vertical stroke -->
          <path d="M 42 35 L 42 65" stroke="#64ffda" stroke-width="4" stroke-linecap="round"/>
          <!-- Top horizontal -->
          <path d="M 42 35 L 58 35" stroke="#64ffda" stroke-width="4" stroke-linecap="round"/>
          <!-- Middle horizontal -->
          <path d="M 42 48 L 54 48" stroke="#64ffda" stroke-width="4" stroke-linecap="round"/>
        </g>

        <!-- Code bracket accent -->
        <g class="code-accent">
          <path d="M 60 42 L 65 47 L 60 52" stroke="#64ffda" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
        </g>

        <!-- Decorative dots -->
        <circle class="dot dot-1" cx="50" cy="24" r="2" fill="#64ffda" opacity="0.8"/>
        <circle class="dot dot-2" cx="68" cy="40" r="2" fill="#64ffda" opacity="0.8"/>
        <circle class="dot dot-3" cx="68" cy="60" r="2" fill="#64ffda" opacity="0.8"/>
        <circle class="dot dot-4" cx="32" cy="40" r="2" fill="#64ffda" opacity="0.8"/>

        <!-- Gradients -->
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#64ffda;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00d9ff;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#64ffda;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00d9ff;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `,
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {}
