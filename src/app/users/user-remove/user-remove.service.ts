import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class UserRemoveService {

  constructor(public http: Http) { }

  private removeUrl: string = "http://localhost:8080/user/remove/1"

  postRemove(moonUser: any, callback){
    return this.http.delete(this.removeUrl).subscribe(callback);
  }

}
