import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { MeetinglistRoutingModule } from './meetinglist-routing.module';
import { MeetinglistComponent } from "./meetinglist.component";
import { MeetinglistService } from "./meetinglist.service";

@NgModule({
  imports: [
    CommonModule,
    MeetinglistRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [MeetinglistComponent],
  providers: [MeetinglistService]
})
export class MeetinglistModule { }
