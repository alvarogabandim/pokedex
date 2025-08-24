import { Component, OnInit } from '@angular/core';
// 1. O RouterModule PRECISA ser importado aqui
import { RouterOutlet, RouterModule } from '@angular/router'; 
import { PokemonService } from './services/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonCard } from './components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. O RouterModule PRECISA estar nesta lista de imports!
  imports: [RouterOutlet, CommonModule, PokemonCard, RouterModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe((response: any[]) => {
        this.pokemons = response;
      });
  }
}