import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs/Observable';

const verifyURL = 'http://178.128.50.224:3000/verifyApp/';
const registrationURL = 'http://178.128.50.224:3000/account/create';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataApiService {
  constructor(private http: HttpClient) { }

  getServerHealth(): Observable<any> {
    var data = this.http.get('http://178.128.50.224:3000/accounts');
    return data;
  }

  postRegistration(username, password, email, country, referral): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams()
    .set("username", username)
    .set("password", password)
    .set("email", email)
    .set("country", country)
    .set("referral", referral);
    return this.http.post(registrationURL, requestBody, httpHeader);
  }

  postVerify(username, password): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    var requestBody = new HttpParams().set("username", username).set("password", password);
    return this.http.post(verifyURL, requestBody, httpHeader);
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
