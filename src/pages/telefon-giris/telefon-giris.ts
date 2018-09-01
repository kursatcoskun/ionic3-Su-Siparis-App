import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { OnayKoduPage } from '../onay-kodu/onay-kodu';
/**
 * Generated class for the TelefonGirisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-telefon-giris',
  templateUrl: 'telefon-giris.html',
})
export class TelefonGirisPage {

  tel_no:String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelefonGirisPage');
  }

  onayKoduClicked(){
    const loader = this.loadingCtrl.create({
      content: this.tel_no + "  Onay Kodu Gönderiliyor...",
      duration: 2000
    });
    loader.present();
    this.navCtrl.push(OnayKoduPage);
  }

}
