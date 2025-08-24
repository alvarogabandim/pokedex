import { Routes } from '@angular/router';
// Importando a classe com seu nome completo e correto
import { PokemonDetail } from './pages/pokemon-detail/pokemon-detail';

export const routes: Routes = [
  {
    path: 'pokemon/:id',
    // Usando o nome completo e correto do componente
    component: PokemonDetail
  }
];