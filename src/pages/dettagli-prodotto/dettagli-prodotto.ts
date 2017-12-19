import {Component} from '@angular/core';
import {AlertController, IonicPage, List, NavController, NavParams} from 'ionic-angular';
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
  a: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.prod = this.navParams.get('param1');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettagliProdottoPage');
  }

  addQuantita() {
    if (this.a < this.prod.quantitaDisponibile) {
      this.a = this.a+1;
      this.prod.quantitaDaAcquistare=this.a;
    } else
      this.maxQuantitaAlert()
  }

  removeQuantita() {
    if(this.a>0){
      this.a=this.a-1;
      this.prod.quantitaDaAcquistare=this.a;
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
  maxQuantitaAlert2() {
    if (this.a > this.prod.quantitaDisponibile) {
      let alert = this.alertCtrl.create({
        title: 'Attenzione:',
        subTitle: 'Quantità massima disponibile raggiunta!',
        buttons: ['Chiudi']
      });
      alert.present();
      this.a = 0;
    }

  }
carrello(){

}


}
