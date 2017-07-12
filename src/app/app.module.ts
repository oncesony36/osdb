import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { router } from "./app.router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

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
import { UsersComponent } from './users/users.component';
import { UserRegistComponent } from './users/user-regist/user-regist.component';


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
    MeetingCarouselComponent,
    UsersComponent,
    UserRegistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    router
  ],
  providers: [TagcloudService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
