import { Routes } from '@angular/router';
import { Pag1Component } from './features/pag1/pag1.component';
import { Pag2Component } from './features/pag2/pag2.component';
import { Pag3Component } from './features/pag3/pag3.component';
import { PokemonComponent } from './features/pokemon/pokemon.component';

export const routes: Routes = [
    {
        path: '1',
        component: Pag1Component
    },
    {
        path: '2',
        component: Pag2Component
    },
    {
        path: '3',
        component: Pag3Component
    },
    {
        path: '4',
        component: PokemonComponent
    },
    {
        path: '',
        redirectTo: '/1',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/1'
    }
];
