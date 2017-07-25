import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class RooftoplistService {

  constructor(private http: Http) { }

   oslist2(page){
    return this.http.get(`http://localhost:8090/board/oslist/${page}`).map(res => res.json());
  }

  ptlist(page) {
    return this.http.get(`http://localhost:8090/board/ptlist/${page}`).map(res => res.json());
  }

  mtlist(page) {
    return this.http.get(`http://localhost:8090/board/mtlist/${page}`).map(res => res.json());
  }

  ctlist(page) {
    return this.http.get(`http://localhost:8090/board/ctlist/${page}`).map(res => res.json());
  }

}
