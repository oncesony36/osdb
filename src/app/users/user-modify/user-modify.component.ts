import { Component, OnInit } from '@angular/core';
import { UserReadService } from "../user-read/user-read.service";
import { UserModifyService } from "./user-modify.service";
import { MoonUser } from "../user.model";

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {
  moonUser: MoonUser;

  constructor(public userModifyService: UserModifyService, public userReadService: UserReadService) {
    this.moonUser = new MoonUser();
   }

  ngOnInit() {
    this.userReadService.getRead().subscribe(res => this.moonUser = res);
  }

  postModify(){
    const callback = res =>{
      const moonUser: MoonUser = res.data;
    }
    this.userModifyService.postModify(this.moonUser, callback);
    console.log(this.moonUser);
  }
}
