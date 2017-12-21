import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {prodotto} from "../../model/prodotto";
import {ProdottoProvider} from "../../providers/prodotto/prodotto";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  listaProdotti:Array<prodotto>=new Array();

  constructor(public navCtrl: NavController, private prodottoService: ProdottoProvider) {
   this.getListaProdotti();

  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  getListaProdotti(){
    this.prodottoService.getAll().subscribe(data=>{
      this.listaProdotti=data;
      //console.log("la lista dei prodotti è: "+ JSON.stringify(this.listaProdotti));
    },err=>{
      console.error(err);
    })
  }

}
