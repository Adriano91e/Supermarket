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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ListaProdottiPage} from "../pages/lista-prodotti/lista-prodotti";
import {CarrelloPage} from "../pages/carrello/carrello";
import {DettagliProdottoPage} from "../pages/dettagli-prodotto/dettagli-prodotto";
import { CartaDiCreditoProvider } from '../providers/carta-di-credito/carta-di-credito';
import {ListaCartePage} from "../pages/lista-carte/lista-carte";
import { InterceptorProvider } from '../providers/interceptor/interceptor';
import { OrdineProvider } from '../providers/ordine/ordine';
import {OrdinePage} from "../pages/ordine/ordine";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ListaProdottiPage,
    CarrelloPage,
    DettagliProdottoPage,
    ListaCartePage,
    OrdinePage
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
    DettagliProdottoPage,
    ListaCartePage,
    OrdinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ProdottoProvider,
    CartaDiCreditoProvider,
    InterceptorProvider,{
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorProvider,
      multi: true,
    },
    OrdineProvider
  ]
})
export class AppModule {}
