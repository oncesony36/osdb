import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturelistComponent } from "./culturelist.component";

const routes: Routes = [
  { path: 'board/ctlist/:pageNo', component: CulturelistComponent},
  { path: 'board/ctlist/1', component: CulturelistComponent},
  { path: 'list', redirectTo: 'board/ctlist/1', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CulturelistRoutingModule { }
