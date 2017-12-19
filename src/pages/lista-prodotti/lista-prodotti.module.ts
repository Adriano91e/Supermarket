import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaProdottiPage } from './lista-prodotti';

@NgModule({
  declarations: [
    ListaProdottiPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaProdottiPage),
  ],
})
export class ListaProdottiPageModule {}
