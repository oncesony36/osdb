import { Component, OnInit } from '@angular/core';
import { RooftoplistService } from "../../rooftoplist/rooftoplist.service";

@Component({
  selector: 'app-party-carousel',
  templateUrl: './party-carousel.component.html',
  styleUrls: ['./party-carousel.component.css']
})
export class PartyCarouselComponent implements OnInit {

  ptlist: Array<Object> = [];
  ptlist1: Array<Object> = [];
  ptlist2: Array<Object> = [];

  constructor(private ps: RooftoplistService) { }

  ngOnInit() {
    this.getList(0);
  }

  getList(page){
    console.log("clicked");
    //console.log(page);
    this.ps.ptlist(page).subscribe(
      
      (data) => {
        for(let i=0; i <= 2; i++) {
          this.ptlist.push(data.content[i]);
        }
        for(let i=3; i <= 5; i++) {
          this.ptlist1.push(data.content[i]);
        }
        for(let i=6; i <= 8; i++) {
          this.ptlist2.push(data.content[i]);
        }
        //this.rflist = data.content;
        console.log(this.ptlist);
        console.log(this.ptlist1);
        console.log(this.ptlist2);
            
    },
      
    (err) => console.log(err),
      () => {
        console.log('fighting')
        //console.log(this.boards);       
      }
    )
  }

}
