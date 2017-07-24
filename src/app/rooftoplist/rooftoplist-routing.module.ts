import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RooftoplistComponent } from "./rooftoplist.component";

const routes: Routes = [

  { path: 'board/oslist/:pageNo', component: RooftoplistComponent},
  { path: 'board/oslist/1', component: RooftoplistComponent},
  { path: 'list', redirectTo: 'board/oslist/1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RooftoplistRoutingModule { }
