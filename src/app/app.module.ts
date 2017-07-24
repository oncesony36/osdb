import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { router } from "./app.router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

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
<<<<<<< HEAD
import { RooftoplistComponent } from './rooftoplist/rooftoplist.component';

import { RooftoplistModule } from "./rooftoplist/rooftoplist.module";
=======
import { HomeModule } from "./home/home.module";
>>>>>>> c86266d3238d91cc86a87068d683491545355f0e


@NgModule({
  declarations: [
    AppComponent,
    UserRegistComponent,
    UserReadComponent,
<<<<<<< HEAD
    UserModifyComponent
    //RooftoplistComponent
=======
    UserModifyComponent,
    HeaderComponent,
    FooterComponent
>>>>>>> c86266d3238d91cc86a87068d683491545355f0e
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    router,
<<<<<<< HEAD
    // NgbModule.forRoot(),
    RooftoplistModule
=======
    NgbModule.forRoot(),
    HomeModule
>>>>>>> c86266d3238d91cc86a87068d683491545355f0e
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
