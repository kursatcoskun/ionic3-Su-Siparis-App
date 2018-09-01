import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the KisiselBilgilerimiDuzenlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kisisel-bilgilerimi-duzenle',
  templateUrl: 'kisisel-bilgilerimi-duzenle.html',
})
export class KisiselBilgilerimiDuzenlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KisiselBilgilerimiDuzenlePage');
  }

  degistirClicked(){
    this.navCtrl.setRoot(ContactPage);
  }

}
