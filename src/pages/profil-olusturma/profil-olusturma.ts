import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SifreOlusturmaPage } from '../sifre-olusturma/sifre-olusturma';
import { LoginPage } from '../login/login';
/**
 * Generated class for the ProfilOlusturmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil-olusturma',
  templateUrl: 'profil-olusturma.html',
})
export class ProfilOlusturmaPage {

  sehir:string;
  semt:string;
  mahalle:string;
  sokak:string;
  sehirOpt: { title: string, subTitle: string };
  semtOpt: { title: string, subTitle: string };
  mahalleOpt: { title: string, subTitle: string };
sokakOpt:{title:string,subTitle:string};

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.sehirOpt = {
      title: 'Şehir',
      subTitle: 'Yaşadığınız Şehri Seçin'
    };
    this.semtOpt = {
      title: 'Semt',
      subTitle: 'Yaşadığınız Semti Seçin'
    };
    this.mahalleOpt = {
      title: 'Mahalle',
      subTitle: 'Yaşadığınız Mahalleyi Seçin'
    };
    this.sokakOpt={
      title:'Sokak',
      subTitle:'Yaşadığınız Sokağı Seçin'
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilOlusturmaPage');
  }

  adresClicked(){
    const loader = this.loadingCtrl.create({
      content: "Adresiniz oluşturuluyor...",
      duration: 2000
    });
    loader.present();
    this.navCtrl.push(SifreOlusturmaPage);
  }

 

}
