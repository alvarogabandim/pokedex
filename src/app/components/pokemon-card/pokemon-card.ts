import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard implements OnInit {
  @Input() pokemon: any;

  imageUrl: string = '';

  ngOnInit(): void {
    if (this.pokemon) {
      // Extrai o ID da URL do Pokémon
      const pokemonId = this.pokemon.url.split('/')[6];
      // Constrói a URL da imagem usando o ID
      this.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    }
  }
}