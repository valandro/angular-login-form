import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  authenticate(req: Object) {
    return this.http.post('http://127.0.0.1:8090/auth',{
      username: req['username'],
      password: req['password']
    });
  }
}
