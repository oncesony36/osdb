import { Component, OnInit } from '@angular/core';
import { RooftoplistService } from "../rooftoplist/rooftoplist.service";
import { ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-culturelist',
  templateUrl: './culturelist.component.html',
  styleUrls: ['./culturelist.component.css']
})
export class CulturelistComponent implements OnInit {

   private ctlist: Array<Object> = [];
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

  constructor(private cs: RooftoplistService, private route: ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const pageNo = params.pageNo;;
    this.getList(pageNo-1);
  }

  getList(page){
    console.log("clicked");
 
    this.cs.ctlist(page).subscribe(
      
      (data) => {
     
        this.ctlist = data.content;
        console.log(this.ctlist);
            
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
