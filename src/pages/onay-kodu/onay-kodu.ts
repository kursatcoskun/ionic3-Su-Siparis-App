import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ProfilOlusturmaPage } from '../profil-olusturma/profil-olusturma';
/**
 * Generated class for the OnayKoduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onay-kodu',
  templateUrl: 'onay-kodu.html',
})
export class OnayKoduPage {

  onayKodu:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnayKoduPage');
  }
onaylaClicked(){

  const loader = this.loadingCtrl.create({
    content: "Onay Kodu Doğrulanıyor...",
    duration: 2000
  });
  loader.present();
  this.navCtrl.push(ProfilOlusturmaPage);

}
  

}
