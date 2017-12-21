import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {prodotto} from "../../model/prodotto";

/**
 * Generated class for the DettagliProdottoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dettagli-prodotto',
  templateUrl: 'dettagli-prodotto.html',
})
export class DettagliProdottoPage {

  prod: prodotto;
  a: number = 0;
  listaProdCarrello: Array<prodotto> = new Array();
  controllo: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    // this.prod = new prodotto();
    this.prod = this.navParams.get('param1');
    //localStorage.setItem("list", JSON.stringify(this.listaProdCarrello));
    //localStorage.removeItem("list");
    // localStorage.clear() //svuota localstorage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettagliProdottoPage');
    console.log("prova localstorage" + localStorage.getItem('list'));
    console.log(typeof (localStorage.getItem('list')));
    //this.ty=localStorage.getItem(JSON.stringify('list')).toString();

  }


  addQuantita() {
    console.log(this.prod.quantitaDaAcquistare);
    if (this.prod.quantitaDaAcquistare < this.prod.quantitaDisponibile) {
      console.log("divisione " + this.prod.quantitaDaAcquistare);
      this.prod.quantitaDaAcquistare = +this.prod.quantitaDaAcquistare + 1;
      this.a = this.a + 1;
      console.log("somma " + this.prod.quantitaDaAcquistare);
    } else
      this.maxQuantitaAlert()
  }

  removeQuantita() {
    if (this.prod.quantitaDaAcquistare > 0) {
      this.prod.quantitaDaAcquistare = this.prod.quantitaDaAcquistare - 1;
    }
  }

  maxQuantitaAlert() {
    let alert = this.alertCtrl.create({
      title: 'Attenzione:',
      subTitle: 'Quantità massima disponibile raggiunta!',
      buttons: ['Chiudi']
    });
    alert.present();
  }

  checkQuantita() {
    console.log(this.prod.quantitaDaAcquistare);
    if (this.prod.quantitaDaAcquistare > this.prod.quantitaDisponibile) {
      let alert = this.alertCtrl.create({
        title: 'Attenzione:',
        subTitle: 'Quantità massima disponibile raggiunta!',
        buttons: ['Chiudi']
      });
      alert.present();
      this.prod.quantitaDaAcquistare = 0;
    }

  }

  carrello(prod) {
    console.log(prod);
    if (typeof (localStorage.getItem("list")) === 'object') {
      console.log("entro nella prima condizione");
      //this.listaProdCarrello=new Array();
      this.listaProdCarrello.push(prod);
      localStorage.setItem("list", JSON.stringify(this.listaProdCarrello));
    } else {
      console.log("sto nel primo else");
      this.listaProdCarrello = JSON.parse(localStorage.getItem("list"));
      for (let p of this.listaProdCarrello) {
        if (p.nome == prod.nome) {
          console.log("sto nell'if dell'aumento di un prodotto gia presente");
          p.quantitaDaAcquistare = +p.quantitaDaAcquistare + +prod.quantitaDaAcquistare;
          localStorage.setItem("list", JSON.stringify(this.listaProdCarrello));
          this.controllo = false;
        }
      }
      if (this.controllo == true) {
        console.log("entro nella condizione finale");
        this.listaProdCarrello.push(prod);
        localStorage.setItem("list", JSON.stringify(this.listaProdCarrello));
      }
      console.log("sto fuori da tutto");
      this.prod.quantitaDaAcquistare = 0;
      console.log(localStorage.getItem("list").toString());
    }
  }

}
