import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class UserReadService {

  constructor(public http: Http) { }

  getRead(){
    return this.http.get(`http://localhost:8080/user/read/1`).map((res: Response) => res.json());
  }
}
