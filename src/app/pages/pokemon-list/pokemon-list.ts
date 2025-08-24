import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PokemonCardComponent],
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe((response: any[]) => {
        this.pokemons = response;
      });
  }
}