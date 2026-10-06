import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calcular-media/calcular-media';

export const routes: Routes = [
    {path: '', redirectTo: 'calculadora', pathMatch: 'full'},

    {path: 'calculadora', component: CalculadoraComponent}
];
