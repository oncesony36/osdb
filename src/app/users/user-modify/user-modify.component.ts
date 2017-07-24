import { Component, OnInit } from '@angular/core';
import { UserReadService } from "../user-read/user-read.service";
import { UserModifyService } from "./user-modify.service";
import { MoonUser } from "../user.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {
  moonUser: MoonUser;
  usno: string;

  constructor(public userModifyService: UserModifyService, public userReadService: UserReadService, private activatedRoute: ActivatedRoute) {
    this.moonUser = new MoonUser();
   }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.usno = params.usno;
    this.userReadService.getRead(this.usno).subscribe(res => this.moonUser = res);
  }

  postModify(){
    const callback = res =>{
      const moonUser: MoonUser = res.data;
    }
    this.userModifyService.postModify(this.moonUser, callback, this.usno);
    console.log(this.moonUser);
  }
  
}
