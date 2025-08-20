import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'cardapio',
    loadComponent: () => import('./pages/cardapio/cardapio').then(m => m.Cardapio)
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato').then(m => m.Contato)
  },
  { path: '**', redirectTo: '' }
];
