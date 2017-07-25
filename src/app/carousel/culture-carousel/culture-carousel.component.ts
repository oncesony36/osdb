import { Component, OnInit } from '@angular/core';
import { RooftoplistService } from "../../rooftoplist/rooftoplist.service";

@Component({
  selector: 'app-culture-carousel',
  templateUrl: './culture-carousel.component.html',
  styleUrls: ['./culture-carousel.component.css']
})
export class CultureCarouselComponent implements OnInit {

  ctlist: Array<Object> = [];
  ctlist1: Array<Object> = [];
  ctlist2: Array<Object> = [];

  constructor(private cs: RooftoplistService) { }

  ngOnInit() {
    this.getList(0);
  }

  getList(page){
    console.log("clicked");
    //console.log(page);
    this.cs.ctlist(page).subscribe(
      
      (data) => {
        for(let i=0; i <= 2; i++) {
          this.ctlist.push(data.content[i]);
        }
        for(let i=3; i <= 5; i++) {
          this.ctlist1.push(data.content[i]);
        }
        for(let i=6; i <= 8; i++) {
          this.ctlist2.push(data.content[i]);
        }
        //this.rflist = data.content;
        console.log(this.ctlist);
        console.log(this.ctlist1);
        console.log(this.ctlist2);
            
    },
      
    (err) => console.log(err),
      () => {
        console.log('fighting')
        //console.log(this.boards);       
      }
    )
  }

}
