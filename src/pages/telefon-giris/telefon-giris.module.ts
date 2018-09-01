import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelefonGirisPage } from './telefon-giris';

@NgModule({
  declarations: [
    TelefonGirisPage,
  ],
  imports: [
    IonicPageModule.forChild(TelefonGirisPage),
  ],
})
export class TelefonGirisPageModule {}
