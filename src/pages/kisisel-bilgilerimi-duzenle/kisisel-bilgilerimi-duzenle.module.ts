import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KisiselBilgilerimiDuzenlePage } from './kisisel-bilgilerimi-duzenle';

@NgModule({
  declarations: [
    KisiselBilgilerimiDuzenlePage,
  ],
  imports: [
    IonicPageModule.forChild(KisiselBilgilerimiDuzenlePage),
  ],
})
export class KisiselBilgilerimiDuzenlePageModule {}
