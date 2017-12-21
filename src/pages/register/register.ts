import {Component} from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginProvider} from "../../providers/login/login";
import {user} from "../../model/user";
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: user = new user;
  prova:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService: LoginProvider,
              private alertCtrl: AlertController, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(user) {
    this.registerService.Register(this.user).subscribe(data => {
      console.log("user created");
      this.navCtrl.setRoot(LoginPage);
    }, err => {
      console.log(err);
    })
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Registrazione:',
      subTitle: 'Registrazione avvenuta con successo',
      buttons: ['Chiudi']
    });
    alert.present();
  }

}
