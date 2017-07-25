import { Component, OnInit } from '@angular/core';
import { RooftoplistService } from "../rooftoplist/rooftoplist.service";
import { ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-meetinglist',
  templateUrl: './meetinglist.component.html',
  styleUrls: ['./meetinglist.component.css']
})
export class MeetinglistComponent implements OnInit {

  private mtlist: Array<Object> = [];
  private start: number;
  private end: number;
  private realEnd: number;
  private pageNo: number;
  private prev: boolean;
  private next: boolean;
  private page: number;

  range = (start, end) => { 
    let numbers = []; 
    for(let i = start; i <= end; i++) { 
      numbers.push(i); 
    } 
    return numbers; 
  }

  constructor(private ms: RooftoplistService, private route: ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const pageNo = params.pageNo;;
    this.getList(pageNo-1);
  }

  getList(page){
    console.log("clicked");
 
    this.ms.mtlist(page).subscribe(
      
      (data) => {
     
        this.mtlist = data.content;
        console.log(this.mtlist);
            
        this.end = Math.ceil((data.number+1 ) / data.size) * data.size;
      
        this.start = (this.end - data.size) + 1;
        
        this.realEnd = Math.ceil (data.totalElements / data.size);
       
        if(this.end > this.realEnd){
          this.end = this.realEnd;
        }
        this.prev = this.start == 1 ? false : true;
        
        this.next = this.end * data.size >= data.totalElements ? false : true;
   
    },
      
    (err) => console.log(err),
      () => {
        console.log('fighting')
              
      }
    )
  }

}
