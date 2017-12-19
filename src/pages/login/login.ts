import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  user:user=new user;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService:LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    this.loginService.Login(this.user).subscribe(data=>{
      console.log("logged "+data);
      this.navCtrl.setRoot(ListaProdottiPage);
    },err=>{
      console.log(err)
    })
  }

}