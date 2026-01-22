import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { HomeComponent } from './app/pages/home/home';
import { NotFound } from './app/pages/pages/not-found/not-found';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'notfound', component: NotFound },
      { path: '**', redirectTo: 'notfound' }
    ])
  ]
});
