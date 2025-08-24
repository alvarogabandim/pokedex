import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Adicionado RouterModule
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicionado RouterModule
  templateUrl: './pokemon-detail.html',
  styleUrls: ['./pokemon-detail.css']
})
export class PokemonDetailComponent implements OnInit {
  // AQUI ESTÁ A LINHA QUE FALTAVA!
  pokemon: any = null; 

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonDetails(pokemonId)
        .subscribe((data: any) => {
          this.pokemon = data;
        });
    }
  }
}