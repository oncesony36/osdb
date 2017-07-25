import { Component, OnInit } from '@angular/core';
import { RooftoplistService } from "../../rooftoplist/rooftoplist.service";

@Component({
  selector: 'app-meeting-carousel',
  templateUrl: './meeting-carousel.component.html',
  styleUrls: ['./meeting-carousel.component.css']
})
export class MeetingCarouselComponent implements OnInit {

  mtlist: Array<Object> = [];
  mtlist1: Array<Object> = [];
  mtlist2: Array<Object> = [];

  constructor(private ms: RooftoplistService) { }

  ngOnInit() {
    this.getList(0);
  }

  getList(page){
    console.log("clicked");
    //console.log(page);
    this.ms.mtlist(page).subscribe(
      
      (data) => {
        for(let i=0; i <= 2; i++) {
          this.mtlist.push(data.content[i]);
        }
        for(let i=3; i <= 5; i++) {
          this.mtlist1.push(data.content[i]);
        }
        for(let i=6; i <= 8; i++) {
          this.mtlist2.push(data.content[i]);
        }
        //this.rflist = data.content;
        console.log(this.mtlist);
        console.log(this.mtlist1);
        console.log(this.mtlist2);
            
    },
      
    (err) => console.log(err),
      () => {
        console.log('fighting')
        //console.log(this.boards);       
      }
    )
  }

}
