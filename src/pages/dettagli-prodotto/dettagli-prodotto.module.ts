import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DettagliProdottoPage } from './dettagli-prodotto';

@NgModule({
  declarations: [
    DettagliProdottoPage,
  ],
  imports: [
    IonicPageModule.forChild(DettagliProdottoPage),
  ],
})
export class DettagliProdottoPageModule {}
