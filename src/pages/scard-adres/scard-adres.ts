import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiparisSepetiPage } from '../siparis-sepeti/siparis-sepeti';

/**
 * Generated class for the ScardAdresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scard-adres',
  templateUrl: 'scard-adres.html',
})
export class ScardAdresPage {
  adresSubject:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScardAdresPage');
  }

  adresEklemeClicked(){
    this.navCtrl.setRoot(SiparisSepetiPage);

  }

}
