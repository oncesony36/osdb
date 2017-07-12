import { Component, OnInit, ElementRef } from '@angular/core';
import { TagcloudService } from "./tagcloud.service";


@Component({
  selector: 'app-tagcloud',
  templateUrl: './tagcloud.component.html',
  styleUrls: ['./tagcloud.component.css']
})
export class TagcloudComponent implements OnInit {

  private tag: string;
  private count: number;

  constructor(private ts: TagcloudService, private elementRef:ElementRef) { }

  ngOnInit() {
    // this.viewWordCloud();
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/createwc.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  viewWordCloud() {
    console.log("wordcloud")
    this.ts.getTagCloud().subscribe(
      (data) =>{
        this.tag = data[0][0];
        this.count = data[0][1];
        console.log(data);
        console.log(this.tag);
        console.log(this.count);
      }  
    )

  }

}
