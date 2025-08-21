import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon'; // <-- CORRIGIDO
import { CommonModule } from '@angular/common';
import { PokemonCard } from './components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PokemonCard],
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