import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { SiparislerimPage } from '../siparislerim/siparislerim';

/**
 * Generated class for the SiparisLastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-siparis-last',
  templateUrl: 'siparis-last.html',
})
export class SiparisLastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SiparisLastPage');
  }

  siparislerim(){
    this.navCtrl.setRoot(SiparislerimPage);
    
  }

}
