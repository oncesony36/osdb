import { Component, OnInit } from '@angular/core';
import { MoonUser } from "../user.model";
import { UserReadService } from "./user-read.service";
import { Router, ActivatedRoute } from "@angular/router";
import { UserModifyComponent } from "../user-modify/user-modify.component";

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  moonUser : MoonUser;
  usno: string;

  constructor(public userReadService: UserReadService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.moonUser = new MoonUser();
   }

  readUser = [];

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.usno = params.usno;
    this.userReadService.getRead(this.usno).subscribe(res => this.readUser = res);

  }

  postRemove(usno){
    const params = this.activatedRoute.snapshot.params;
    this.usno = params.usno;
    const onSuccess = res =>{
    }
    this.userReadService.postRemove(this.moonUser, onSuccess, this.usno);
  }

}
