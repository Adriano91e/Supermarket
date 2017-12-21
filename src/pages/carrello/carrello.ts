import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {prodotto} from "../../model/prodotto";
import {CartaDiCredito} from "../../model/cartaDiCredito";
import {CartaDiCreditoProvider} from "../../providers/carta-di-credito/carta-di-credito";
import {ProdottoProvider} from "../../providers/prodotto/prodotto";
import {Ordine} from "../../model/ordine";

/**
 * Generated class for the CarrelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrello',
  templateUrl: 'carrello.html',
})
export class CarrelloPage {

  listaProdottiCarrello: prodotto[];
  listaCarte: CartaDiCredito[];
  prezzoTot: number = 0;
  carta: CartaDiCredito;
  ordine:Ordine[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartaService: CartaDiCreditoProvider,
              private prodottoService: ProdottoProvider) {
    this.listaProdottiCarrello = JSON.parse(localStorage.getItem('list'));
    if (typeof (localStorage.getItem("list")) !== 'object') {
      for (let p of this.listaProdottiCarrello) {
        this.prezzoTot = this.prezzoTot + (p.prezzoIvato * p.quantitaDaAcquistare);
      }
    }
    this.getCarte();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrelloPage');
  }

  getCarte() {
    this.cartaService.findCarte().subscribe(data => {
      this.listaCarte = data;
      console.log("la lista delle carte di credito è :" + data.toString());
    }, err => {
      console.error(err);
    })
  }

  Acquista() {
    console.log("la carta e: " + this.carta.id);
    console.log("i prodotti sono :" + this.listaProdottiCarrello.toString());
    this.prodottoService.Buy(this.carta.id, this.listaProdottiCarrello).subscribe(data => {
      console.log("ordine effettuato "+JSON.stringify(data));
      //localStorage.removeItem('list');
    }, err => {
      console.error(err);
    })
  }

  clearCarrello() {
    localStorage.removeItem('list');
  }

}
