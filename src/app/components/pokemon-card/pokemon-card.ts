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

  pokemonId: string = '';
  imageUrl: string = '';

  ngOnInit(): void {
    if (this.pokemon) {
      // Agora pegamos o ID e a imagem diretamente dos dados detalhados!
      this.pokemonId = this.pokemon.id.toString().padStart(3, '0');
      this.imageUrl = this.pokemon.sprites.front_default;
    }
  }
}