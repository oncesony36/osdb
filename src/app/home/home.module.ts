import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { router } from "../app.router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { TagcloudComponent } from '../tagcloud/tagcloud.component';

import { TagcloudService } from "../tagcloud/tagcloud.service";
import { CarouselComponent } from '../carousel/carousel.component';
import { RoofCarouselComponent } from '../carousel/roof-carousel/roof-carousel.component';
import { PartyCarouselComponent } from '../carousel/party-carousel/party-carousel.component';
import { CultureCarouselComponent } from '../carousel/culture-carousel/culture-carousel.component';
import { MeetingCarouselComponent } from '../carousel/meeting-carousel/meeting-carousel.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    router
  ],
  declarations: [
    TagcloudComponent,
    CarouselComponent,
    RoofCarouselComponent,
    PartyCarouselComponent,
    CultureCarouselComponent,
    MeetingCarouselComponent,
    HomeComponent
  ],
  providers: [TagcloudService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}  
  ],
  bootstrap: []
})
export class HomeModule { }
