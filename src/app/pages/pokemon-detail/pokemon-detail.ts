import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // 1. Importamos a ferramenta de rota
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css'
})
export class PokemonDetail implements OnInit { // Lembre-se que o nome da sua classe pode ser PokemonDetailComponent

  // Injetamos o ActivatedRoute no construtor para podermos usá-lo
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Pegamos o 'id' da URL e o exibimos no console para teste
    const pokemonId = this.route.snapshot.paramMap.get('id');
    console.log('O ID do Pokémon nesta página é:', pokemonId);
  }

}