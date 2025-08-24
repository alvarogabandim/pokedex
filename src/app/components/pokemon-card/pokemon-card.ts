import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCardComponent implements OnInit {
  // Corrigido
  @Input() pokemon: any;

  pokemonId: string = '';
  imageUrl: string = '';

  ngOnInit(): void {
    if (this.pokemon) {
      this.pokemonId = this.pokemon.id.toString().padStart(3, '0');
      this.imageUrl = this.pokemon.sprites.front_default;
    }
  }
}
