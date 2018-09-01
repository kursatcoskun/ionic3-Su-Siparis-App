import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ScardAdresPage } from '../scard-adres/scard-adres';
import { ScardOdemePage } from '../scard-odeme/scard-odeme';
import { AlertController } from 'ionic-angular';
import { SiparisLastPage } from '../siparis-last/siparis-last';

/**
 * Generated class for the SiparisSepetiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-siparis-sepeti',
  templateUrl: 'siparis-sepeti.html',
})
export class SiparisSepetiPage {
  value:any;
  tarih: string = "Hemen";
  adet:string="1";

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public alerCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SiparisSepetiPage');
  }


  adresBilgileriClicked(){
    
    this.navCtrl.push(ScardAdresPage);
  }
  odemeSecenekleriClicked(){
    this.navCtrl.push(ScardOdemePage);
  }
  tamamlaClicked(){
    this.navCtrl.push(SiparisLastPage);
  }

  urunClicked(){
    let confirm = this.alerCtrl.create({
      title: 'Sepete Eklensin mi?',
      message: this.adet +' Adet ürün sepete eklensin mi ?',
      buttons: [
        {
          text: 'İptal',
          handler: () => {
            
          }
        },
        {
          text: 'Tamam',
          handler: () => {
            
          }
        }
      ]
    });
    confirm.present()
  }

}
