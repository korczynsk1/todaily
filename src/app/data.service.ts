import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
    getDaily() {
      return this.http.get('http://gsx2json.com/api?id=14xhbg6eu27x39OJXm0Kj-5SetZ2LBVZ2aHPk6qB7lpQ');
    }

}
