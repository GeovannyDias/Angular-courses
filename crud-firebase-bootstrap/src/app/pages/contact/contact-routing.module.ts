import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactGuard } from 'src/app/shared/guards/contact.guard';

import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    canDeactivate: [ContactGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
