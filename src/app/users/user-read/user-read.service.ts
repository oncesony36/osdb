import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { UserReadComponent } from "./user-read.component";


@Injectable()
export class UserReadService {

  constructor(public http: Http) { }

  getRead(usno){
    return this.http.get(`http://localhost:8080/user/read/${usno}`).map((res: Response) => res.json());
  }

  postRemove(moonUser: any, callback, usno){
    return this.http.post(`http://localhost:8080/user/remove/${usno}`, moonUser).subscribe(callback);
  }

}
