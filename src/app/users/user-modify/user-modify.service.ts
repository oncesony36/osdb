import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class UserModifyService {

  constructor(public http: Http) { }

  private modifyUrl: string = "http://localhost:8080/user/modify/"

  postModify(moonUser: any, callback){
    return this.http.post(this.modifyUrl, moonUser).map((res: Response) => res.json()).subscribe(callback);
  }

}
