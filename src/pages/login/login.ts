import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginProvider} from "../../providers/login/login";
import {user} from "../../model/user";
import {ListaProdottiPage} from "../lista-prodotti/lista-prodotti";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {username: '', password: ''};

  //prova:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService:LoginProvider, public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    this.loginService.Login(this.user).subscribe(data=>{

      console.log("logged "+JSON.stringify(data));
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token',btoa(this.user.username+':'+this.user.password));

     // this.events.publish('user:created', this.prova, Date.now());
      this.navCtrl.setRoot(ListaProdottiPage);

    },err=>{
      console.log(err)
    })
  }

}
