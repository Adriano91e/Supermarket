import { Component, ViewChild } from '@angular/core';
import {Events, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {ListaProdottiPage} from "../pages/lista-prodotti/lista-prodotti";
import {CarrelloPage} from "../pages/carrello/carrello";
import {ListaCartePage} from "../pages/lista-carte/lista-carte";
import {OrdinePage} from "../pages/ordine/ordine";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  pagesLogged: Array<{title: string, component: any}>;
  pages3:any;
  logged:any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events:Events) {
    this.initializeApp();

    events.subscribe('user:created', (prova, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', prova, 'at', time);
      this.logged = prova;
      console.log("Prova events" + JSON.stringify(this.logged));
      // if(this.logged!=null){
      //   this.pages3=this.pages
      // } else
      //   this.pages3=this.pagesLogged
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage},
      { title: 'Lista Prodotti', component: ListaProdottiPage},
      { title: 'Carrello', component:CarrelloPage},
      { title: 'Lista Carte di Credito', component:ListaCartePage},
      { title: 'Lista Ordini', component:OrdinePage},
    ];

    this.pagesLogged=[
      { title: 'ListaProdotto', component: ListaProdottiPage},

    ];

    this.pages3=this.pagesLogged;




  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
