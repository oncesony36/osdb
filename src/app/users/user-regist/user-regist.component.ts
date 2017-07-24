import { Component, OnInit } from '@angular/core';
import { MoonUser } from "../user.model";
import { UserRegistService } from "./user-regist.service";

@Component({
  selector: 'app-user-regist',
  templateUrl: './user-regist.component.html',
  styleUrls: ['./user-regist.component.css']
})
export class UserRegistComponent implements OnInit {
  moonUser: MoonUser;

  constructor(public userRegistService: UserRegistService) {
    this.moonUser = new MoonUser();    
   }

  ngOnInit() {
  }

  postRegist(){
    const newMoonUser = {usid: this.moonUser.usid, uspw: this.moonUser.uspw, usnick: this.moonUser.usnick, usmail: this.moonUser.usmail, ushp: this.moonUser.ushp};
    const callback = res =>{
      const newMoonUser: MoonUser = res.data;
    }
    alert(`사용자 생성\nID:${newMoonUser.usid}\nPW:${newMoonUser.uspw}\nNICK:${newMoonUser.usnick}\nMAIL:${newMoonUser.usmail}\nHP:${newMoonUser.ushp}`);

    this.userRegistService.postRegist(newMoonUser, callback);
  }

}
