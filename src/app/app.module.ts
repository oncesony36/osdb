import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { router } from "./app.router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TagcloudComponent } from './tagcloud/tagcloud.component';

import { UserRegistService } from "./users/user-regist/user-regist.service";
import { UserReadService } from "./users/user-read/user-read.service";
import { UserModifyService } from "./users/user-modify/user-modify.service";
import { UserRegistComponent } from './users/user-regist/user-regist.component';
import { UserReadComponent } from './users/user-read/user-read.component';
import { UserModifyComponent } from './users/user-modify/user-modify.component';

import { RooftoplistModule } from "./rooftoplist/rooftoplist.module";
import { HomeModule } from "./home/home.module";

import { PartylistModule } from "./partylist/partylist.module";
import { CulturelistModule } from "./culturelist/culturelist.module";
import { MeetinglistModule } from "./meetinglist/meetinglist.module";


@NgModule({
  declarations: [
    AppComponent,
    UserRegistComponent,
    UserReadComponent,
    UserModifyComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    router,
    RooftoplistModule,
    NgbModule.forRoot(),
    HomeModule,
    PartylistModule,
    CulturelistModule,
    MeetinglistModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    UserRegistService,
    UserReadService,
    UserModifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
