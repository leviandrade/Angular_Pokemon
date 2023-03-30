import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { PokemonRoutingModule } from './pokemon.route';
import { PokemonAppComponent } from './pokemon.app.component';



@NgModule({
  declarations: [
    PokemonAppComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
  ]
})
export class PokemonModule { }
