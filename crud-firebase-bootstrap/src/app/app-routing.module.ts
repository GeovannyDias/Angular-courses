import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Curso 2
  // Nueva ruta (si no hay ninguna ruta se direcciona a la ruta /home)
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // Curso 1
  { path: 'list', loadChildren: () => import('./pages/employees/list/list.module').then(m => m.ListModule) },
  { path: 'new', loadChildren: () => import('./pages/employees/new/new.module').then(m => m.NewModule) },
  { path: 'details', loadChildren: () => import('./pages/employees/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit', loadChildren: () => import('./pages/employees/edit/edit.module').then(m => m.EditModule) },

  // Curso 2
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
