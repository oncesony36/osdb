import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class TagcloudService {

  constructor(private http:Http) { }

  getTagCloud() {
    return this.http.get('http://localhost:8090/board/wordcloud').map(res => res.json());
  }

}
