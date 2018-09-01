import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { SiparislerimPage } from '../siparislerim/siparislerim';
import { AdreslerimPage } from '../adreslerim/adreslerim';
import { WelcomePage } from '../welcome/welcome';
import { KisiselBilgilerimiDuzenlePage } from '../kisisel-bilgilerimi-duzenle/kisisel-bilgilerimi-duzenle';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  apptype = "bilgiler";

  constructor(public navCtrl: NavController,private app:App) {

  }

  siparislerimClicked(){
    this.navCtrl.push(SiparislerimPage);
  }

  adreslerimClicked(){
    this.navCtrl.push(AdreslerimPage);
  }

  logout(){
    this.app.getRootNav().setRoot(WelcomePage);
  }
  duzenleClicked(){
    this.navCtrl.push(KisiselBilgilerimiDuzenlePage);
  }
}
