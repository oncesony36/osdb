import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { RooftoplistRoutingModule } from './rooftoplist-routing.module';
import { RooftoplistComponent } from "./rooftoplist.component";
import { RooftoplistService } from "./rooftoplist.service";


@NgModule({
  imports: [
    CommonModule,
    RooftoplistRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [RooftoplistComponent],
  providers: [RooftoplistService]
})
export class RooftoplistModule { }
