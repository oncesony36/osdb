import { Component, OnInit } from '@angular/core';
import { MoonUser } from "../users/user.model";
import { UserReadService } from "../users/user-read/user-read.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  moonUser : MoonUser;
  usno: string;

  constructor() { }

  ngOnInit() {
    this.moonUser = new MoonUser();
    this.usno = this.moonUser.usno;

    console.log(this.usno);
  }

}
