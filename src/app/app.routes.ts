import { Routes } from '@angular/router';
import { ImovelDetalhesComponent } from './imovel-detalhes/imovel-detalhes.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"detalhes",
        component:ImovelDetalhesComponent
    },
    {
        path:"",
        component:HomeComponent
    }
];
