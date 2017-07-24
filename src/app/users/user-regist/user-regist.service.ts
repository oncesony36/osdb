import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class UserRegistService {

  constructor(public http: Http) { }

  postRegist(moonUser: any, callback){
    this.http.post("http://localhost:8080/user/uregister", moonUser).map(res => res.json()).subscribe(callback);
  }

}
