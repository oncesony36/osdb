import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TagcloudComponent } from './tagcloud/tagcloud.component';

import { TagcloudService } from "./tagcloud/tagcloud.service";
import { CarouselComponent } from './carousel/carousel.component';
import { RoofCarouselComponent } from './carousel/roof-carousel/roof-carousel.component';
import { PartyCarouselComponent } from './carousel/party-carousel/party-carousel.component';
import { CultureCarouselComponent } from './carousel/culture-carousel/culture-carousel.component';
import { MeetingCarouselComponent } from './carousel/meeting-carousel/meeting-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TagcloudComponent,
    CarouselComponent,
    RoofCarouselComponent,
    PartyCarouselComponent,
    CultureCarouselComponent,
    MeetingCarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TagcloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
