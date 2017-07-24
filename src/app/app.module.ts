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

import { UserRegistService } from "./users/user-regist/user-regist.service";
import { UserReadService } from "./users/user-read/user-read.service";
import { UserModifyService } from "./users/user-modify/user-modify.service";
import { UserRemoveService } from "./users/user-remove/user-remove.service";
import { TagcloudService } from "./tagcloud/tagcloud.service";
import { CarouselComponent } from './carousel/carousel.component';
import { RoofCarouselComponent } from './carousel/roof-carousel/roof-carousel.component';
import { PartyCarouselComponent } from './carousel/party-carousel/party-carousel.component';
import { CultureCarouselComponent } from './carousel/culture-carousel/culture-carousel.component';
import { MeetingCarouselComponent } from './carousel/meeting-carousel/meeting-carousel.component';
import { UserRegistComponent } from './users/user-regist/user-regist.component';
import { HomeComponent } from './home/home.component';
import { UserReadComponent } from './users/user-read/user-read.component';
import { UserModifyComponent } from './users/user-modify/user-modify.component';
import { UserRemoveComponent } from './users/user-remove/user-remove.component';


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
    UserRegistComponent,
    HomeComponent,
    UserReadComponent,
    UserModifyComponent,
    UserRemoveComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    router
  ],
  providers: [
    TagcloudService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    UserRegistService,
    UserReadService,
    UserModifyService,
    UserRemoveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
