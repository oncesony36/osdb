import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { CulturelistRoutingModule } from './culturelist-routing.module';
import { CulturelistComponent } from "./culturelist.component";
import { CulturelistService } from "./culturelist.service";

@NgModule({
  imports: [
    CommonModule,
    CulturelistRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [CulturelistComponent],
  providers: [CulturelistService]
})
export class CulturelistModule { }
