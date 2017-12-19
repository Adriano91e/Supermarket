import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { ProdottoProvider } from '../providers/prodotto/prodotto';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {HttpClientModule} from "@angular/common/http";
import {ListaProdottiPage} from "../pages/lista-prodotti/lista-prodotti";
import {CarrelloPage} from "../pages/carrello/carrello";
import {DettagliProdottoPage} from "../pages/dettagli-prodotto/dettagli-prodotto";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ListaProdottiPage,
    CarrelloPage,
    DettagliProdottoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ListaProdottiPage,
    CarrelloPage,
    DettagliProdottoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ProdottoProvider
  ]
})
export class AppModule {}
