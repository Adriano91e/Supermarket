import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProdottoProvider} from "../../providers/prodotto/prodotto";
import {prodotto} from "../../model/prodotto";
import {CarrelloPage} from "../carrello/carrello";
import {DettagliProdottoPage} from "../dettagli-prodotto/dettagli-prodotto";

/**
 * Generated class for the ListaProdottiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-prodotti',
  templateUrl: 'lista-prodotti.html',
})
export class ListaProdottiPage {

  listaProdotti:Array<prodotto>=new Array();

  pr:prodotto;

  logged:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private prodottoService:ProdottoProvider) {
    this.getListaProdotti();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaProdottiPage');
  }


  getListaProdotti(){
    this.prodottoService.getAll().subscribe(data=>{
     this.listaProdotti=data;
     //console.log("la lista dei prodotti è: "+ JSON.stringify(this.listaProdotti));
    },err=>{
      console.error(err);
    })
  }

  changePageDettaglio(prodotto){
   this.navCtrl.push(DettagliProdottoPage, {
     param1: prodotto
   });
  }

  goCarrello(){
    this.navCtrl.push(CarrelloPage);
  }
}
