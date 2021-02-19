import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './components/category/category.component';
import {LoginComponent} from './components/login/login.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';
const routes: Routes = [
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'categories', component: CategoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
