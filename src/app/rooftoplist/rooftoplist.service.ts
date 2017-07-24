import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class RooftoplistService {

  constructor(private http: Http) { }

   oslist2(page){
    return this.http.get(`http://localhost:8090/board/oslist/${page}`).map(res => res.json());
  }

}
