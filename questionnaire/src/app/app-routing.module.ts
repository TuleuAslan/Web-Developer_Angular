import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './pages/create/create.component';
import {FillComponent} from './pages/fill/fill.component';
import {ResultComponent} from './pages/result/result.component';

const routes: Routes = [
  {path: '', redirectTo: 'create', pathMatch: 'full'},
  {path: 'create', component: CreateComponent},
  {path: 'fill', component: FillComponent},
  {path: 'result', component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
