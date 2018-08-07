import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://spreadsheets.google.com/feeds/list/14xhbg6eu27x39OJXm0Kj-5SetZ2LBVZ2aHPk6qB7lpQ/od6/public/values?alt=json';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
    getDaily() {
      return this.http.get(url);
    }

}
