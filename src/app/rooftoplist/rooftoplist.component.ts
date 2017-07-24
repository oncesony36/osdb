import { Component, OnInit } from '@angular/core';
import { RooftoplistService } from "./rooftoplist.service";
import { ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-rooftoplist',
  templateUrl: './rooftoplist.component.html',
  styleUrls: ['./rooftoplist.component.css']
})
export class RooftoplistComponent implements OnInit {

  private oslist: Array<Object> = [];
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

  constructor(private rs: RooftoplistService, private route: ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    const pageNo = params.pageNo;;
    this.getList(pageNo-1);
  }

  getList(page){
    console.log("clicked");
    //console.log(page);
    this.rs.oslist2(page).subscribe(
      
      (data) => {
        //console.log(data.content[5][5]);
        //console.log(data.number);
        //this.pageNo = data.number;
        //console.log(this.pageNo);
        
        this.oslist = data.content;
        console.log(this.oslist);
       // console.log(page);
        // this.pages = data.pagemaker;
        //this.page = data.list.pageable.pageNumber;
        // this.dataList = data.list;
                
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
        //console.log(this.boards);       
      }
    )
  }

}
