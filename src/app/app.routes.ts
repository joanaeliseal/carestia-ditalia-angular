import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cardapio } from './pages/cardapio/cardapio';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cardapio', component: Cardapio },
  { path: 'contato', component: Contato },
  { path: '**', redirectTo: '' }
];
