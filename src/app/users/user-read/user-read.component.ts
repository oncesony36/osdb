import { Component, OnInit } from '@angular/core';
import { UserReadService } from "./user-read.service";

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  constructor(public userReadService: UserReadService) { }

  readUser = [];

  ngOnInit() {
    this.userReadService.getRead().subscribe(res => this.readUser = res);
  }

}
