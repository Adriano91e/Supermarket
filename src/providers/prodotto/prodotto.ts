import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {List} from "ionic-angular";
import {prodotto} from "../../model/prodotto";
import {BACKEND_URL_PRODOTTO} from "../../util";

/*
  Generated class for the ProdottoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProdottoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProdottoProvider Provider');
  }

  getAll(){
   return this.http.get<prodotto[]>(BACKEND_URL_PRODOTTO+'getall');
  }

  Buy(idCarta,listaProdotti){
    return this.http.post(BACKEND_URL_PRODOTTO+'addprodotto/'+idCarta,listaProdotti, httpOptions);
  }
}
