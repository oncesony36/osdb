import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartylistComponent } from "./partylist.component";

const routes: Routes = [
  { path: 'board/ptlist/:pageNo', component: PartylistComponent},
  { path: 'board/ptlist/1', component: PartylistComponent},
  { path: 'list', redirectTo: 'board/ptlist/1', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartylistRoutingModule { }
