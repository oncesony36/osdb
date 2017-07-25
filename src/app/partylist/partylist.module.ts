import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { PartylistRoutingModule } from './partylist-routing.module';
import { PartylistComponent } from "./partylist.component";
import { PartylistService } from "./partylist.service";


@NgModule({
  imports: [
    CommonModule,
    PartylistRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [PartylistComponent],
  providers: [PartylistService]
})
export class PartylistModule { }
