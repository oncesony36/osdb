import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class UserModifyService {

  constructor(public http: Http) { }

  postModify(moonUser: any, callback, usno){
    return this.http.post(`http://localhost:8080/user/modify/${usno}`, moonUser).map((res: Response) => res.json()).subscribe(callback);
  }
}
