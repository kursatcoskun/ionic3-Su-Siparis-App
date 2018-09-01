import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SifreOlusturmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sifre-olusturma',
  templateUrl: 'sifre-olusturma.html',
})
export class SifreOlusturmaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SifreOlusturmaPage');
  }


  kaydetClicked(){
    const loader = this.loadingCtrl.create({
      content: "Şifre oluşturuluyor...",
      duration: 2000
    });
    loader.present();
    this.navCtrl.push(LoginPage);
  }
}
