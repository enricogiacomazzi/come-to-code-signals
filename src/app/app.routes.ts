import { Routes } from '@angular/router';
import { Pag1Component } from './features/pag1/pag1.component';
import { Pag2Component } from './features/pag2/pag2.component';
import { Pag3Component } from './features/pag3/pag3.component';
import { PokemonComponent } from './features/pokemon/pokemon.component';

export const routes: Routes = [
    {
        path: '',
        component: Pag1Component
    },
    {
        path: 'due',
        component: Pag2Component
    },
    {
        path: 'tre',
        component: Pag3Component
    },
    {
        path: 'poke',
        component: PokemonComponent
    }
];
