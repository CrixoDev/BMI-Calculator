import { Routes } from '@angular/router';
import { InitComponent } from './init/init.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
    {path: '', component: InitComponent},
    {path: 'results/:value', component: ResultsComponent},
    {path: '**', redirectTo : ''}
];
