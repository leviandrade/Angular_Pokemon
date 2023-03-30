import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Root } from '../models/Root'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private pokemonService: PokemonService) {

  }

  retorno = new Root();


  ngOnInit(): void {
    this.obterPokemons(0, 20);
  }

  obterPokemons(offset: number, limit: number) {
    this.pokemonService.obterTodos(offset, limit)
      .subscribe(
        retorno => this.retorno = retorno
      );
  }

  anterior() {
    if (this.retorno.previous != null) {
      this.pokemonService.teste(this.retorno.previous)
        .subscribe(
          retorno => this.retorno = retorno
        );
    }
  }
  proximo() {
    if (this.retorno.next != null) {
      this.pokemonService.teste(this.retorno.next)
        .subscribe(
          retorno => this.retorno = retorno
        );
    }
  }

}
