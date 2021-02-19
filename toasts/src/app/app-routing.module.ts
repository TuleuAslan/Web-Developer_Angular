import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToastsComponent} from './pages/toasts/toasts.component';

const routes: Routes = [
  {path: '', redirectTo: 'toasts', pathMatch: 'full'},
  {path: 'toasts', component: ToastsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
