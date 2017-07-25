import { Component, OnInit } from '@angular/core';
import { RooftoplistService } from "../../rooftoplist/rooftoplist.service";

@Component({
  selector: 'app-roof-carousel',
  templateUrl: './roof-carousel.component.html',
  styleUrls: ['./roof-carousel.component.css']
})
export class RoofCarouselComponent implements OnInit {

  rflist: Array<Object> = [];
  rflist1: Array<Object> = [];
  rflist2: Array<Object> = [];

  constructor(private rs: RooftoplistService) { }

  ngOnInit() {
    this.getList(0);
  }

  getList(page){
    console.log("clicked");
    //console.log(page);
    this.rs.oslist2(page).subscribe(
      
      (data) => {
        for(let i=0; i <= 2; i++) {
          this.rflist.push(data.content[i]);
        }
        for(let i=3; i <= 5; i++) {
          this.rflist1.push(data.content[i]);
        }
        for(let i=6; i <= 8; i++) {
          this.rflist2.push(data.content[i]);
        }
        //this.rflist = data.content;
        console.log(this.rflist);
        console.log(this.rflist1);
        console.log(this.rflist2);
            
    },
      
    (err) => console.log(err),
      () => {
        console.log('fighting')
        //console.log(this.boards);       
      }
    )
  }

  range = (start, end) => { 
    let numbers = []; 
    for(let i = start; i <= end; i++) { 
      numbers.push(i); 
    } 
    return numbers; 
  }

}
