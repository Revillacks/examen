import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./app.component').then(m => m.AppComponent)
  },
  {
    path: 'navbar',
    loadComponent: () => import('./navbar/navbar.component')
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo:'home',
  }
];
