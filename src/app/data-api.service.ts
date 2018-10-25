import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs/Observable';

const loginUrl = 'http://178.128.50.224:3000/login/';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataApiService {
  constructor(private http: HttpClient) { }

  getServerHealth(): Observable<any> {
    var data = this.http.get('http://178.128.50.224:3000/accounts');
    console.log("Data from server service " + data);
    return data;
  }

  postLogin(username, password): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("username", username).set("password", password);
    return this.http.post(loginUrl, requestBody, httpHeader);
  }

  postDownload(): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/octet-stream', 'Content-Disposition':'attachment ; filename="testapk.apk'})
    };
    // var requestBody = new HttpParams().set("username", '123').set("password", '456');
    return this.http.post('http://178.128.50.224:3000/downloadapp', {} , httpHeader);
  }

  getDownload(): Observable<any> {
    return this.http.get('http://178.128.50.224:3000/downloadApp', {responseType:'blob'});
  }
  
}
