import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { PokemonAppComponent } from './pokemon.app.component';

const pokemonRouterConfig: Routes = [
    {
        path: '', component: PokemonAppComponent,
        children: [
            { path: 'listar', component: ListaComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonRouterConfig)
    ],
    exports: [RouterModule]
})
export class PokemonRoutingModule { }