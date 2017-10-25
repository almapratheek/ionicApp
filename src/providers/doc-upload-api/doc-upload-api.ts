import { Injectable, ErrorHandler } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';


@Injectable()
export class DocUploadApiProvider {

  constructor(public http: Http, public handleError: ErrorHandler) {
  }

  getDocument(imgName: string): Observable<any> {
    return this.http.get("http://192.168.1.65:8080/getDoc?name="+imgName)
    .map(res => res.json())
    .catch(err => {
      console.log('UI error handling');
      return Observable.throw(err.json().error) || 'Server Error'});
    }

  // getDocument(imgName: string): Promise<string> {
  //   return new Promise(resolve => {
  //     this.http.get("http://192.168.1.65:8080/getDoc?name="+imgName)
  //     .subscribe(res => res);
  //   })
  // }

  postDocument(imgName: string, image: string): Observable<any> {
    let imgData = {
      name: imgName,
      data: image
    };

    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'})
    return this.http
    .post("http://192.168.1.65:8080/uploadDoc", imgData, new RequestOptions({headers: headers}))
    .map(res => res.status)
    .catch(err => {
      console.log('UI error handling');
      return Observable.throw(err.json().error) || 'Server Error'});
  }

}
