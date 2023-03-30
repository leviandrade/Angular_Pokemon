import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonAppComponent } from './pokemon/pokemon.app.component';

const routes: Routes = [    {
  path: 'pokemon',
  loadChildren: () => import('./pokemon/pokemon.module')
    .then(m => m.PokemonModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
