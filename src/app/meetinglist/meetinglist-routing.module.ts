import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetinglistComponent } from "./meetinglist.component";

const routes: Routes = [
   { path: 'board/mtlist/:pageNo', component: MeetinglistComponent},
  { path: 'board/mtlist/1', component: MeetinglistComponent},
  { path: 'list', redirectTo: 'board/mtlist/1', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetinglistRoutingModule { }
