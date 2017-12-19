import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BACKEND_URL_USER} from "../../util";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  Register(user) {
    return this.http.post(BACKEND_URL_USER+"register", user, httpOptions);
  }

  Login(user) {
    return this.http.post(BACKEND_URL_USER+"login", user, httpOptions);
  }

  logout() {
    return this.http.options(BACKEND_URL_USER+"logoutApp", {responseType: 'text'});
  }

}
